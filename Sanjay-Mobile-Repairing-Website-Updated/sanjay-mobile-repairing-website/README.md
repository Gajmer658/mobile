# TechFix Mobile Care — Website

A mobile-first website for a local mobile phone repair & accessories shop.
Plain HTML, CSS and JavaScript — no build tools, no frameworks.

## Folder structure

```
mobile-repair-shop/
├── index.html
├── css/style.css
├── js/script.js
├── images/           ← put your real photos here (see below)
└── README.md
```

## 1. Change business details (name, phone, WhatsApp, address, hours)

Two places to edit:

- **`js/script.js`** — top of the file, inside the `CONFIG` object:
  - `PHONE_NUMBER` — used by every "Call Now" button
  - `WHATSAPP_NUMBER` — used by every WhatsApp button (country code + number, no `+` or spaces, e.g. `919876543210`)
  - `GOOGLE_MAPS_URL` — used by the "Get Directions" button
  - `WHATSAPP_MESSAGES` — the pre-filled text for each WhatsApp button

- **`index.html`** — visible text such as the shop name, address, hours and
  About section copy. Search for these and replace with real details:
  - `TechFix Mobile Care` (shop name, appears in header/hero/footer/title)
  - `[Shop Address]`, `Koloriang, Arunachal Pradesh`
  - `Mon–Sat, 9:30 AM – 7:00 PM` (opening hours)
  - `info@example.com` (email)
  - The `<script type="application/ld+json">` block near the top — replace
    `SHOP_NAME`, `SHOP_ADDRESS`, `SHOP_CITY`, `SHOP_STATE`, `SHOP_PINCODE`,
    `PHONE_NUMBER`, `OPENING_HOURS` with your real values (used by Google
    for local search results, not shown on the page itself).

## 2. Change the WhatsApp number

Edit `WHATSAPP_NUMBER` in `js/script.js` — that's the only place it's stored.
Every WhatsApp button on the site (floating button, hero, accessories,
contact section) pulls from this one value.

## 3. Add your own images

Replace the files in `images/` with real photos, keeping the same file
names (or update the `src` paths in `index.html` if you rename them):

- `images/logo.png` — shop logo (square, used as favicon too)
- `images/hero.jpg` — main hero photo
- `images/shop.jpg` — shop front / counter
- `images/repair.jpg` — repair work close-up
- `images/accessories/*.jpg` — one photo per accessory category

Keep photos reasonably compressed (under ~300 KB each) for fast loading on
mobile data.

## 4. Add the Google Maps embed

In `index.html`, find the comment:

```html
<!-- Replace this iframe with the shop's Google Maps embed code -->
```

Go to Google Maps → find your shop → Share → Embed a map → copy the
`<iframe>` code → paste it in place of the existing iframe.

Also update `GOOGLE_MAPS_URL` in `js/script.js` so the "Get Directions"
button points to the same location.

## 5. Change the colors

Open `css/style.css` and edit the values at the top under `:root`:

```css
--color-primary: #1d3557;   /* main brand color (header, headings, buttons) */
--color-accent:  #e0862b;   /* accent color (CTAs, highlights) */
```

Every other color on the page is built from these two, so changing them
here updates the whole site.

## 6. Add another service

In `index.html`, inside `<section id="services">`, copy one
`<article class="service-card">...</article>` block, paste it below the
last one, and edit the heading/description text (and optionally the SVG
icon).

## 7. Add another accessory

In `index.html`, inside `<section id="accessories">`, copy one
`<article class="accessory-card">...</article>` block, edit the image path,
alt text and heading.

## 8. Deploying the website

This is a static site — any static host works. Simple free options:

- **Netlify / Vercel** — drag and drop the `mobile-repair-shop` folder, or
  connect a GitHub repo.
- **GitHub Pages** — push the folder to a GitHub repo and enable Pages in
  the repo settings.
- Any shared hosting plan that serves plain HTML/CSS/JS also works — just
  upload the whole folder via FTP.

Before going live, remember to:
- Replace the `<link rel="canonical">` and Open Graph URLs in `index.html`
  with your real domain.
- Replace the JSON-LD placeholder values described in step 1.
- Test the site on a real phone, not just a browser resized to mobile width.

## Notes

- No backend or booking system is included yet. The HTML/CSS/JS structure
  is kept simple so a booking form, database or admin dashboard can be
  added later without reworking the whole site.
- No fake reviews, review counts or awards are included — add real ones
  once you have them, in a new section if needed.
