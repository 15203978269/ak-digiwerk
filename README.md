# AK.DIGIWERK — Project Structure

Professional file layout for the AK.DIGIWERK marketing site. The original
single-file build has been split into small, single-purpose files so you can
edit one thing without scrolling through everything.

## File map

```
ak-digiwerk/
├── index.html                 ← Shell: nav, footer, loads everything
│
├── css/
│   ├── tokens.css             ← Colours & design variables (edit brand colours HERE)
│   ├── base.css               ← CSS reset, body font
│   ├── layout.css             ← .wrap, page system, page-header
│   ├── components.css         ← Buttons, tags, pills, cookie banner
│   ├── nav.css                ← Top navigation bar
│   ├── footer.css             ← Footer
│   └── pages/
│       ├── home.css           ← Hero, stats, about, CTA band
│       ├── services.css       ← Services grid + process steps
│       ├── case-studies.css   ← Accordion + PSR tabs + KPIs
│       ├── contact.css        ← Contact form + DSGVO box
│       └── legal.css          ← Impressum / Datenschutz typography
│
├── pages/                     ← HTML for each page (loaded by app.js)
│   ├── home.html
│   ├── services.html
│   ├── case-studies.html
│   ├── contact.html
│   ├── impressum.html
│   └── datenschutz.html
│
├── js/
│   ├── app.js                 ← Boot sequence + page router + partial loader
│   ├── i18n.js                ← Language switcher (EN ⇄ DE)
│   ├── accordion.js           ← Case study accordion + tabs
│   ├── cookie-banner.js       ← Cookie banner open/close
│   ├── contact-form.js        ← Formspree submit handler
│   └── data/
│       ├── translations-en.js ← All English strings
│       └── translations-de.js ← All German strings
│
└── assets/                    ← Images, GIFs, photos
    ├── image.gif
    ├── 1st.gif
    ├── thesis3.png
    ├── app.png
    ├── 3_d bin optimizer.png
    ├── guido.png
    └── mak.png
```

## Common edits — where to go

| You want to…                              | Edit this file                        |
|-------------------------------------------|---------------------------------------|
| Change brand colours / palette            | `css/tokens.css`                      |
| Change a button style                     | `css/components.css`                  |
| Change the hero text                      | `pages/home.html` + both translations |
| Add a new service card                    | `pages/services.html`                 |
| Add a new case study                      | `pages/case-studies.html` + add `cN…` keys to both translation files |
| Change contact form fields                | `pages/contact.html`                  |
| Wire form to your own email service       | `pages/contact.html` (`<form action="…">`) |
| Add a new language string                 | Add `data-key="myKey"` in HTML, add value to BOTH translation files |
| Add a new whole page                      | Create `pages/myPage.html`, add to `PAGES[]` in `js/app.js`, add nav link in `index.html` |

## Running locally

Because the pages use `fetch()` to load partials, you cannot open `index.html`
directly with `file://` — you need a local server.

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node
npx serve .

# Option 3: VS Code → install "Live Server" extension → right-click index.html → "Open with Live Server"
```

Then open <http://localhost:8000>.

## Deploying

The whole `ak-digiwerk/` folder is a static site — drop it on Netlify, Vercel,
GitHub Pages, Cloudflare Pages, or any static host. No build step required.

## Activating the contact form

1. Sign up at <https://formspree.io> (free tier = 50 submissions/month).
2. Create a new form and copy your endpoint URL.
3. In `pages/contact.html`, replace the value of `action="…"` on the `<form>`
   with your endpoint.

Done — submissions will now email you.
