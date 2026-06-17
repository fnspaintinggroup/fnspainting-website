param(
  [string]$GitHubToken,
  [string]$GitHubUser = "x-access-token"
)

$ErrorActionPreference = "Stop"

function Read-Token {
  if (-not [string]::IsNullOrWhiteSpace($GitHubToken)) {
    return $GitHubToken
  }

  $secure = Read-Host "GitHub token" -AsSecureString
  $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  try {
    return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
  }
  finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
  }
}

$token = Read-Token
if ([string]::IsNullOrWhiteSpace($token)) {
  throw "GitHub token is required."
}

@"
protocol=https
host=github.com
username=$GitHubUser
password=$token

"@ | git credential approve

if ($LASTEXITCODE -ne 0) {
  throw "Could not save GitHub token."
}

Write-Host "GitHub token saved. Future pushes can use git push without pasting the token."
