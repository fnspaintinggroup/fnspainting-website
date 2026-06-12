# F&S Painting Deployment Checklist

Project folder:

```text
C:\Users\hissa\Documents\Landing page
```

Current local Git state:

```text
Branch: main
Initial commit: ea6cab748a183942298c426b1ceb546fc209f47d
```

## 1. Push to GitHub

Install Git for Windows if `git --version` does not work:

```text
https://git-scm.com/download/win
```

Open PowerShell:

```powershell
cd "C:\Users\hissa\Documents\Landing page"
git status
```

Create an empty GitHub repository:

```text
Repository name: fs-painting-website
Do not add README, .gitignore, or license
```

Then connect and push:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/fs-painting-website.git
git push -u origin main
```

## 2. Import to Vercel

1. Open Vercel.
2. Choose **Add New > Project**.
3. Import the GitHub repo.
4. Framework preset should be **Next.js**.
5. Root directory should be the repo root.
6. Add environment variables from `.env.example`.
7. Set:

```text
NEXT_PUBLIC_SITE_URL=https://www.fnspainting.com.au
```

8. Deploy.

## 3. Connect Domain

In Vercel:

```text
Project Settings > Domains
```

Add:

```text
fnspainting.com.au
www.fnspainting.com.au
```

Set `www.fnspainting.com.au` as the preferred production domain if you are using the Google Search Console property for `https://www.fnspainting.com.au/`.

At your DNS provider, add the records Vercel gives you. Usually this means:

```text
A record for fnspainting.com.au
CNAME record for www.fnspainting.com.au
```

After DNS verifies, redeploy so SEO URLs use the live domain.

## 4. Google Search Console

1. Open Google Search Console.
2. Add a Domain property for:

```text
fnspainting.com.au
```

3. Add the TXT verification record to DNS.
4. Verify ownership.
5. Submit sitemap:

```text
https://www.fnspainting.com.au/sitemap.xml
```

6. Inspect the homepage URL after deployment:

```text
https://www.fnspainting.com.au
```
