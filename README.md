# F&S Painting Website

Next.js App Router website for F&S Painting, a professional painting company in Sydney, NSW.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Sanity CMS
- App Router

## Local Setup

Install dependencies:

```bash
npm install
```

Run the site:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Copy the environment variable template:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Fill in the values you need in `.env.local`. Never commit `.env.local` or any real secrets.

## Environment Variables

The committed template is [`.env.example`](./.env.example).

Required for production SEO:

```bash
NEXT_PUBLIC_SITE_URL=https://www.fnspainting.com.au
```

Required for Sanity CMS content:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Optional Sanity server variables:

```bash
SANITY_API_TOKEN=your_read_token
SANITY_REVALIDATE_SECRET=your_webhook_secret
```

Quote form email sending:

```bash
RESEND_API_KEY=your_resend_api_key
QUOTE_FROM_EMAIL=F&S Painting Website <quotes@fnspainting.com.au>
QUOTE_TO_EMAIL=fnspaintinggroup@gmail.com
```

The quote form submits to a secure server route at `/api/quote`. The API key is never exposed to the browser. Add these variables in Vercel for the form to send directly to Gmail. In Resend, verify the sender domain first, then set `QUOTE_FROM_EMAIL` to an address on that verified domain. If the sender is not verified, Resend will reject the message.

## Sanity CMS Setup

Create a Sanity project, then add these environment variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Optional server-side variables for later preview or webhook work:

```bash
SANITY_API_TOKEN=your_read_token
SANITY_REVALIDATE_SECRET=your_webhook_secret
```

Optional Google review buttons:

```bash
NEXT_PUBLIC_GOOGLE_REVIEWS_URL=your_google_reviews_page_url
NEXT_PUBLIC_GOOGLE_REVIEW_URL=your_google_leave_review_url
```

If these Google URLs are not set, the review buttons display in a disabled state instead of using fake links.

## Optional Google Business Profile Reviews API

The site is prepared for secure server-side Google Business Profile review fetching. API credentials are read only on the server and must not use `NEXT_PUBLIC_` prefixes.

Add these server-side environment variables:

```bash
GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID=your_account_id
GOOGLE_BUSINESS_PROFILE_LOCATION_ID=your_location_id
GOOGLE_BUSINESS_PROFILE_CLIENT_ID=your_oauth_client_id
GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET=your_oauth_client_secret
GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN=your_oauth_refresh_token
GOOGLE_BUSINESS_PROFILE_REVIEW_LIMIT=6
GOOGLE_BUSINESS_PROFILE_REVIEW_CACHE_SECONDS=3600
```

How it works:

1. `lib/review-providers.ts` exchanges the refresh token for an access token on the server.
2. Reviews are fetched from the Google Business Profile API on the server only.
3. Review data is cached with Next.js server caching.
4. If Google credentials are missing, the API fails, or no reviews are returned, the site falls back to CMS-managed Sanity reviews.
5. The frontend receives only normalized review text, rating, customer name, source, and date.

Google API setup checklist:

1. Create or select a Google Cloud project.
2. Enable the Google Business Profile APIs needed for review access.
3. Create OAuth credentials.
4. Authorize the OAuth client for the Business Profile account and location.
5. Generate a refresh token with the `https://www.googleapis.com/auth/business.manage` scope.
6. Add the server-side environment variables above to local `.env.local` and your hosting provider.

The embedded Sanity Studio is available at:

```text
/studio
```

If Sanity variables are not configured, the frontend uses the local sample content in `lib/blog-posts.ts`, `lib/projects.ts`, and `lib/site-data.ts`.

## Deploying to Vercel

Recommended setup:

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New > Project**.
3. Import the repository.
4. Set **Framework Preset** to **Next.js**. Vercel should detect this automatically.
5. Keep the project root as the repository root.
6. Add the environment variables from `.env.example` in **Project Settings > Environment Variables**.
7. Deploy.

Vercel build settings:

```text
Install Command: npm install
Build Command: npm run build
Output Directory: .next
Framework: Next.js
```

For local Vercel validation:

```bash
npm run lint
npm run build
```

If using the Vercel CLI:

```bash
npm install -g vercel
vercel link
vercel env pull .env.local
vercel build
vercel deploy
vercel deploy --prod
```

Do not add server-side secrets with `NEXT_PUBLIC_`. Only variables that are safe for the browser should use that prefix.

## Custom Domain on Vercel

1. Open the Vercel project dashboard.
2. Go to **Settings > Domains**.
3. Add the domain, for example:

```text
fnspainting.com.au
www.fnspainting.com.au
```

4. Follow Vercel's DNS instructions.
5. For an apex/root domain, add the DNS record Vercel provides, usually an `A` record or nameserver setup.
6. For `www`, add the `CNAME` record Vercel provides.
7. Set the preferred production domain in Vercel.
8. Update `NEXT_PUBLIC_SITE_URL` in Vercel to the final production URL, for example:

```bash
NEXT_PUBLIC_SITE_URL=https://www.fnspainting.com.au
```

9. Redeploy after changing `NEXT_PUBLIC_SITE_URL` so sitemap, robots, canonical URLs, and Open Graph URLs use the live domain.

## Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a new property.
3. Prefer **Domain property** if you control DNS for the whole domain.
4. Copy the TXT verification record Google provides.
5. Add the TXT record in your DNS provider.
6. Wait for DNS propagation, then click **Verify** in Search Console.
7. After the Vercel site is live, submit:

```text
https://www.fnspainting.com.au/sitemap.xml
```

8. Check **Pages**, **Sitemaps**, and **Core Web Vitals** after Google has crawled the site.
9. If you use the URL-prefix property instead, make sure it exactly matches the production URL, including `https` and `www` if used.

## Sanity Schemas

Schemas live in `sanity/schemas`.

- `blogPost`: title, slug, published date, category, featured image, excerpt, body, SEO title, SEO description.
- `project`: title, slug, suburb, service type, before image, after image, short description, full project description, paint used, completion date, SEO title, SEO description.
- `review`: customer name, rating, review text, source, selected review toggle, date.
- `service`: title, slug, summary, description, display order.

## Frontend CMS Fetching

CMS fetching and fallback logic lives in:

```text
lib/cms.ts
lib/sanity.ts
```

The following pages fetch content from Sanity:

- `/`
- `/services`
- `/projects`
- `/projects/[slug]`
- `/painting-tips`
- `/painting-tips/[slug]`
- `/reviews`
- `/sitemap.xml`

Sanity images are supported through `cdn.sanity.io` in `next.config.mjs`.

## Adding Content

1. Open `/studio`.
2. Create services first if you want services to appear in a custom order.
3. Add blog posts with SEO title and SEO description.
4. Add projects with before and after images, image alt text, materials, and completion date.
5. Add reviews with source and date.

New Sanity documents will automatically replace the local sample content once they exist in the configured dataset.

## Verification

Run:

```bash
npm run lint
npm run build
```
