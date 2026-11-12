# Converts a screen recording (GIF or MP4) into the web assets PokéPod's site uses.
# Requires ffmpeg on PATH (winget install Gyan.FFmpeg).
# Usage:  .\scripts\convert-clip.ps1 -Input "C:\path\pokedex.gif" -Name pokedex
param(
  [Parameter(Mandatory = $true)][string]$Input,
  [Parameter(Mandatory = $true)][string]$Name
)
$ErrorActionPreference = "Stop"
$clips = Join-Path $PSScriptRoot "..\public\clips"
$posters = Join-Path $PSScriptRoot "..\public\posters"
New-Item -ItemType Directory -Force $clips, $posters | Out-Null
$vf = "scale=360:-2:flags=lanczos,fps=15"
ffmpeg -v error -y -i $Input -vf $vf -c:v libvpx-vp9 -crf 40 -b:v 0 -an -pix_fmt yuv420p (Join-Path $clips "$Name.webm")
ffmpeg -v error -y -i $Input -vf $vf -c:v libx264 -crf 31 -preset slow -movflags +faststart -an -pix_fmt yuv420p (Join-Path $clips "$Name.mp4")
ffmpeg -v error -y -i $Input -vf "select=eq(n\,12),scale=540:-2:flags=lanczos" -frames:v 1 -c:v libwebp -quality 82 (Join-Path $posters "$Name.webp")
Write-Host "Created clips/$Name.webm, clips/$Name.mp4 and posters/$Name.webp"
Write-Host "Then add '$Name' to data/clips.ts so the site can use it."
