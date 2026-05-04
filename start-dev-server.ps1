$ErrorActionPreference = "Stop"

Set-Location -LiteralPath $PSScriptRoot
$serverScript = Join-Path $PSScriptRoot "dev-server.ps1"
$job = Start-Job -ScriptBlock {
  param($scriptPath)
  powershell -NoProfile -ExecutionPolicy Bypass -File $scriptPath
} -ArgumentList $serverScript

try {
  Wait-Job $job
  Receive-Job $job
}
finally {
  Remove-Job $job -Force
}
