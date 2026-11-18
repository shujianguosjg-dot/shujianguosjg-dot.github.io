# 舒建国 | Jianguo Shu — Research & Engineering Portfolio

**Website**: https://shujianguosjg-dot.github.io/ (简体中文，默认)  
**English**: https://shujianguosjg-dot.github.io/en/

Bilingual portfolio and resume based on my latest reviewed CV, using **Astro**, **Tailwind CSS**, **daisyUI**, and [Astrofy](https://github.com/manuelernestog/astrofy)-inspired design.

## Site structure

- `/` & `/en/`: bilingual overview
- `/projects/` & `/en/projects/`: five selected technical projects
- `/projects/<slug>/` & `/en/projects/<slug>/`: verified project summaries
- `/cv/` & `/en/cv/`: education, internship, skills, manuscripts, honors
- `/blog/` & `/en/blog/`: placeholder for reviewed research notes

**Single source of truth:** `src/data/portfolio.ts` contains corresponding Chinese and English translations and project data. Avoid silently changing evaluation metrics or publication statuses.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Privacy & future media

- Phone number and WeChat ID from the original CV have **not** been published.
- Contact email is public. The original unredacted PDF is **not** published.
- Images and videos are intentionally excluded in this version.
- PDF downloads, figures, papers, and project demonstrations can be added after review.
- NBS reproduction results do not claim complete reproduction of the original paper.
- Admission to the CAS master's program is for **September 2027**; the site must not imply current enrollment.

## Deployment

Push to `main` and the workflow in `.github/workflows/deploy.yml` deploys to GitHub Pages.

## Attribution

Based on the open-source Astrofy template design by Manuel Ernesto Garcia (MIT license). See [LICENSE](LICENSE).

## NBS + VLA media publishing

The homepage and both project pages now support bilingual, evidence-backed NBS and LIBERO visuals.
The optional `site-media.zip` is a **separately reviewed** 5 MB package containing 12 WebP exports and 2 MP4 clips. Upload the file *unchanged* to the **repository root**; the deployment workflow verifies its exact SHA-256 and extracts only vetted assets to `public/media/` before building the static site. Missing media will show neutral placeholders instead of broken images.

**Important**: `ETH3D` is CC BY-NC-SA 4.0. For promotional or commercial portfolio use, ask for permission or exclude ETH3D figures/video. Middlebury 2021 asks for scholarly citation; LIBERO rollouts are simulated, not real robots. No evidence figure has been altered by generative AI.
