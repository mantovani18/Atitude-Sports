$root = Split-Path -Parent $PSScriptRoot
$script = Get-Content -Raw -Path (Join-Path $root 'script.js')

# extract product src values inside PRODUCTS array
$pattern = "src\s*:\s*'(?<src>[^']+)'"
$matches = [regex]::Matches($script, $pattern)
$srcs = $matches | ForEach-Object { $_.Groups['src'].Value } | Sort-Object -Unique

# gather files
$files = Get-ChildItem -Path $root -Recurse -File | Where-Object { $_.FullName -match '\\(img|img2|infantil\.img|bermudas\.img)\\' } | ForEach-Object { $_.FullName.Substring($root.Length+1).Replace('\\','/') }

function normalizeName($s){
    if(-not $s) { return '' }
    $n = $s.ToLower()
    $n = $n -replace '\\.[^.]+$',''
    $n = $n -replace '[^a-z0-9]',''
    return $n
}

$result = @{}
foreach($src in $srcs){
    $best = @{file=$null;score=9999}
    $srcNorm = normalizeName($src)
    foreach($f in $files){
        $fNorm = normalizeName($f)
        if($srcNorm -eq $fNorm){ $best.file=$f; $best.score=0; break }
        if($fNorm -like "*$srcNorm*") { $best.file=$f; $best.score=1; break }
        # compute simple levenshtein-ish: difference in length
        $score = [math]::Abs($fNorm.Length - $srcNorm.Length)
        if($score -lt $best.score){ $best.file=$f; $best.score=$score }
    }
    $result[$src] = $best
}

$result | ConvertTo-Json -Depth 4
