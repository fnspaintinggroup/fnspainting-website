# F&S Website Maintenance

Use one clean website folder and one owner for each release.

## Fast release order

1. Confirm the final wording, photos, and target page before coding.
2. Keep photo inboxes, exports, and extra worktrees outside this repository.
3. Run `scripts/optimize-site-images.py --apply` before adding new oversized JPEGs.
4. Run the focused check while editing, then run the full lint and production build once before release.
5. Push the verified `main` branch and confirm the production URL.

## Photo standard

- Keep filenames stable after a page references them.
- Web JPEGs larger than 1 MB should normally be optimized.
- The optimizer limits the longest side to 2400 pixels and uses quality 86.
- Keep private source photos in the photo archive, not in this website repository.

## Local archive

The pre-cleanup local branches, worktrees, uploads, and handoff files from 27 July 2026 are preserved at:

`C:\Users\hissa\Documents\Planning\FNS_WEBSITE_ARCHIVE_2026-07-27`
