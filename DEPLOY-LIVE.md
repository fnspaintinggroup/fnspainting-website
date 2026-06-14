# Deploy Live

Use this script instead of running `git pull --rebase` or `git push` directly from the `Landing page` folder.

```powershell
cd "C:\Users\hissa\Documents\Landing page"
.\scripts\deploy-live.ps1 -Message "Describe the website update"
```

What it does:

- Clones or refreshes the real GitHub/Vercel repository in `C:\Users\hissa\Documents\fs-painting-live-auto`.
- Copies the current website files into that live clone.
- Skips `.git`, `node_modules`, `.next`, local cache folders, and local env files.
- Commits only when there are changes.
- Pushes to `origin main`, which triggers Vercel.

If PowerShell blocks the script, run this once:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
