# Jihoon Jeong — Personal Portfolio

Static portfolio website for **Jihoon Jeong** (Undergraduate Researcher · Computer Vision & AI), built as a refined HTML/CSS/JS port of the original [Streamlit version](https://github.com/jeehun3020/my-portfolio).

🌐 **Live**: https://jeehun3020.github.io

## Stack

- Pure HTML / CSS / vanilla JS — no build step
- Inter (Google Fonts)
- Auto dark/light theme + manual toggle (persisted in `localStorage`)
- Korean / English toggle — one button, persisted in `localStorage`, defaults to browser language
- Responsive sidebar layout (collapses on mobile)
- Modal-based detail views, lightbox image zoom, scroll reveal

## Pages

| File                  | Page            |
| --------------------- | --------------- |
| `index.html`          | Home / About    |
| `projects.html`       | Projects        |
| `awards.html`         | Awards          |
| `programs.html`       | Programs        |
| `certifications.html` | Certifications  |
| `publications.html`   | Publications    |

## Local preview

Just open `index.html` in a browser, or run a tiny static server:

```bash
cd ~/Desktop/mypage
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy to GitHub Pages (`jeehun3020.github.io`)

```bash
cd ~/Desktop/mypage

git init
git add .
git commit -m "Initial portfolio site"
git branch -M main

# Create the user-site repo on GitHub first:
#   https://github.com/new  →  name: jeehun3020.github.io  (public)

git remote add origin https://github.com/jeehun3020/jeehun3020.github.io.git
git push -u origin main
```

GitHub Pages auto-publishes a repo named `<user>.github.io` from the `main` branch. Within a minute, the site is live at https://jeehun3020.github.io.

## Updating content

- Text content lives directly in each `*.html` file (look for the `<main>` block).
- **Translations**: English is written inline; Korean goes in a `data-ko` attribute on the same
  element. `js/i18n.js` swaps `innerHTML` between the two.

  ```html
  <h3 data-ko="🎓 학력">🎓 Education</h3>
  ```

  Inner markup is allowed in `data-ko` — escape it (`&lt;b&gt;…&lt;/b&gt;`). An element with no
  `data-ko` simply stays as-is in both languages (used for proper nouns and certification names).
  Rotating typewriter text uses `data-ko-typewriter` alongside `data-typewriter`.
- Add new images under `assets/`. Image filenames are referenced in the HTML directly.
- Replace `assets/profile.jpg` and `assets/Jihoon_Jeong_CV.pdf` to update profile photo / CV.

## Credits

© 2026 Jihoon Jeong
