# Deploy Live

결론부터 보면, 앞으로는 아래 한 줄로 진행하면 됩니다.

```powershell
cd "C:\Users\hissa\Documents\Landing page"
.\scripts\deploy-with-tokens.ps1
```

이 스크립트가 하는 일:

- GitHub 토큰을 물어봅니다.
- Vercel 토큰을 물어봅니다.
- Vercel 연결 파일이 없으면 프로젝트 이름 또는 ID도 물어봅니다.
- 현재 웹사이트 변경 내용을 GitHub에 올립니다.
- 바로 Vercel 실서버 배포까지 진행합니다.

처음부터 값까지 같이 넣고 싶으면 이렇게도 가능합니다.

```powershell
cd "C:\Users\hissa\Documents\Landing page"
.\scripts\deploy-with-tokens.ps1 `
  -GitHubToken "여기에 GitHub 토큰" `
  -VercelToken "여기에 Vercel 토큰" `
  -VercelProjectName "fnspainting-website"
```

만약 프로젝트 이름 대신 ID를 쓰고 싶으면 이렇게 넣으면 됩니다.

```powershell
cd "C:\Users\hissa\Documents\Landing page"
.\scripts\deploy-with-tokens.ps1 `
  -GitHubToken "여기에 GitHub 토큰" `
  -VercelToken "여기에 Vercel 토큰" `
  -VercelOrgId "여기에 Org ID" `
  -VercelProjectId "여기에 Project ID"
```

기존 방식으로 GitHub만 반영하고 싶으면 아래 스크립트도 그대로 사용할 수 있습니다.

```powershell
.\scripts\deploy-live.ps1 -Message "Describe the website update"
```

PowerShell에서 실행이 막히면 한 번만 아래를 실행하세요.

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
