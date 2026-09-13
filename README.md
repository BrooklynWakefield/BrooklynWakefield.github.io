# brooklynwakefield.com — static rebuild

A plain HTML/CSS copy of the content from your Adobe Portfolio site,
rebuilt so it doesn't depend on Adobe's hosting. No build tools,
frameworks, or server needed — every page is a plain `.html` file that
links to one shared `style.css`.

## What's here
- `index.html` — About / home
- `work.html`, `madeec.html`, `hudl.html`, `mitsubishi.html`
- `projects.html`, `mixed-methods.html`, `ux-design.html`, `uocd.html`,
  `design-nature.html`, `pie.html`
- `extracurricular.html`, `undergrad-research.html`, `foundry.html`
- `resume.html`, `contact.html`
- `style.css` — shared stylesheet (blueprint/drafting-paper theme)

All the text content from the live site was carried over as-is.

## About the images
Adobe Portfolio serves images through a system that doesn't expose
direct file URLs to a text-based fetch — so the actual photos,
screenshots, and diagrams could not be pulled through this process.

Instead, every image spot in the HTML is a real `<img src="images/...">`
tag pointing at a specific filename, listed in **MANIFEST.md** in the
order it appears on each page (e.g. `images/madeec-01.jpg`,
`images/madeec-02.jpg`, ...). To fill them in:

1. Create an `images/` folder inside this site folder (already included, empty).
2. Open MANIFEST.md side-by-side with the live Adobe Portfolio page.
3. Download each image from Adobe Portfolio in the same top-to-bottom
   order shown in the manifest, and save/rename it to match exactly
   (e.g. save the first image on the MADEEC page as `madeec-01.jpg`).
4. Drop it into `images/`.

Until a file is in place, that slot shows a dashed placeholder with
its caption so you can see what's still missing. Once the real file
lands at the right path, it swaps in automatically — no HTML editing
needed, unless your saved file is a `.png` or `.gif` (MANIFEST.md
explains the two ways to handle that).

## Favicon
Every page links to `favicon.png` at the root of this folder (next to
`style.css`). It's not part of the numbered image manifest — just
drop your own `favicon.png` in this folder and every page will pick
it up automatically.

## Hosting it
This is a fully static site — you can drop the whole folder into:
- **GitHub Pages** (free, and you already have a GitHub account)
- **Netlify** or **Vercel** (drag-and-drop deploy)
- Any basic web host, via FTP

Once hosted, you can point brooklynwakefield.com's DNS at the new
host if you want to keep the domain.
