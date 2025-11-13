$root = Split-Path -Parent $PSScriptRoot
$dirs = @('img','img2','infantil.img','bermudas.img')

Add-Type -AssemblyName System.Web

function Remove-Diacritics($s) {
    if (-not $s) { return $s }
    $norm = $s.Normalize([System.Text.NormalizationForm]::FormD)
    $clean = [System.Text.RegularExpressions.Regex]::Replace($norm, "\p{M}", '')
    return $clean
}

$mapping = @{}

foreach ($dir in $dirs) {
    $fullDir = Join-Path $root $dir
    if (-not (Test-Path $fullDir)) { continue }
    Get-ChildItem -Path $fullDir -File | ForEach-Object {
        $f = $_
        $origRel = $f.FullName.Substring($root.Length + 1) -replace '\\','/'
        $nameNoExt = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
        $ext = [System.IO.Path]::GetExtension($f.Name).ToLower()
        $clean = Remove-Diacritics $nameNoExt
        # replace non-alnum with underscore
        $clean = [System.Text.RegularExpressions.Regex]::Replace($clean, "[^\p{L}\p{N}]", '_')
        $clean = [System.Text.RegularExpressions.Regex]::Replace($clean, "_+", '_')
        $clean = $clean.Trim('_').ToLower()
        if (-not $clean) { $clean = 'image' }
        $targetName = $clean + $ext
        $targetRel = "$dir/$targetName"
        $targetFull = Join-Path $root $targetRel
        # avoid overwriting an existing file: if exists, append a numeric suffix
        $suffix = 1
        $base = $clean
        while (Test-Path $targetFull) {
            if ($f.FullName -ieq $targetFull) { break } # same file, no-op
            $targetName = "${base}_$suffix$ext"
            $targetRel = "$dir/$targetName"
            $targetFull = Join-Path $root $targetRel
            $suffix++
        }
        if ($f.FullName -ieq $targetFull) {
            # already normalized
            $mapping[$origRel] = $targetRel
            return
        }
        try {
            Write-Host "Renaming: $origRel -> $targetRel"
            Move-Item -LiteralPath $f.FullName -Destination $targetFull -Force
            $mapping[$origRel] = $targetRel
        } catch {
            Write-Warning "Failed to rename $($f.FullName): $_"
        }
    }
}

# save mapping
$mapPath = Join-Path $root 'tools\renamed_mapping.json'
$mapping.GetEnumerator() | Sort-Object Name | ConvertTo-Json -Depth 4 | Set-Content -Path $mapPath -Encoding UTF8
Write-Host "Renaming complete. Mapping saved to $mapPath"
