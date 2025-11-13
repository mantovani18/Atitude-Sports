## derive repository root reliably from script location (avoids encoding issues with user folder)
$root = Split-Path -Parent $PSScriptRoot

# read script.js
$script = Get-Content -Raw -Path (Join-Path $root 'script.js')

# pattern: match img/, img2/, infantil.img/ or bermudas.img/ followed by non-space, non-quote, non-')'
$pattern = '(?:infantil\.img|bermudas\.img|img2|img)/[^\s"''\)]+'

$matches = [regex]::Matches($script, $pattern)
$refs = @()
foreach ($m in $matches) { $refs += $m.Value }
$refsU = $refs | Sort-Object -Unique
$refsNorm = $refsU | ForEach-Object { $_.ToLower() }

# gather image files under the repo
$files = Get-ChildItem -Path $root -Recurse -File | Where-Object { $_.FullName -match '\\(img|img2|infantil\.img|bermudas\.img)\\' } | ForEach-Object { $_.FullName.Substring($root.Length+1).Replace('\\','/') }
$filesNorm = $files | ForEach-Object { $_.ToLower() }

$missing = $refsNorm | Where-Object { $filesNorm -notcontains $_ }
$unused = $filesNorm | Where-Object { $refsNorm -notcontains $_ }

$report = @{ 
    referencedCount = ($refsNorm | Sort-Object -Unique).Count
    referenced = $refsNorm
    missingCount = ($missing | Sort-Object -Unique).Count
    missing = $missing
    presentCount = ($filesNorm | Sort-Object -Unique).Count
    present = $filesNorm
    unusedCount = ($unused | Sort-Object -Unique).Count
    unused = $unused
}

$report | ConvertTo-Json -Depth 5
