# Arunkumar — Portfolio

Staff Product Designer portfolio. Plain HTML + CSS + JS — no build step.

## View locally

Just open `index.html` in any browser. That's it.

Or serve it:
```bash
npx serve .        # Node must be installed
# or
python3 -m http.server 8080
```

## Edit content

Everything lives in `index.html`. Search for the text you want to change and edit directly.

Key things to update:
- **Email** — search for `hello@arunkumar.design` and replace with your real email
- **Case study links** — the two `figma.com/deck/...` href values in the Work section
- **Bio text** — the `<p class="about-bio">` paragraph in the About section

## Files

```
index.html   — full page
style.css    — Shadcn Graphite dark design tokens + all styles
script.js    — sticky nav + scroll reveal (~25 lines)
public/
  favicon.svg
```

## Deploy

Push to GitHub → Vercel picks up `index.html` as a static site automatically, zero config.
