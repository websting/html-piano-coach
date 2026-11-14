# 🎹 Piano Coach Template

A modern, responsive one-page HTML template designed for piano coaches, music teachers, and performing artists who want to showcase lessons, programs, and recitals with style.

---

## 📸 Live Demo

**Preview:** [Piano Coach Template](https://ahtml-piano-coach-template.netlify.app/)

---

## 🚀 Features

- 🎵 Smooth scrolling and mobile-first responsive layout
- 💨 Styled with **Tailwind CSS 4.x** and Vite
- ✨ Animated scroll effects powered by **AOS**
- 🎤 High-contrast hero section with dual call-to-action buttons
- 🎓 Interactive program tabs (**Beginner**, **Intermediate**, **Advanced**) with active state highlighting
- 🎬 Events and recital highlights section with an interactive video lightbox modal
- ⭐ Student testimonials grid with typewriter callout
- 💌 Clean contact form layout *(ready for Netlify Forms, Formspree, or custom backend)*
- 📱 Mobile hamburger drawer with backdrop overlay + signature desktop social rail
- 🛠️ Cleanly commented code that is easy to customize for any brand

---

## 🧱 Tech Stack

- **HTML5**
- **Tailwind CSS 4.x**
- **Vite** (fast dev server and production bundler)
- **Vanilla JavaScript** (menu drawer, tab switcher, video modal, AOS initialization)
- **Font Awesome** icons
- **Google Fonts**

---

## 🛠️ Setup Instructions

1. **Unzip** the downloaded template folder.

2. **Open a terminal** and navigate to the project folder:
   ```bash
   cd piano-coach-download
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Your local dev server will run at `http://localhost:5173` (or the next available port).

5. **Build for production:**
   ```bash
   npm run build
   ```
   This generates a `dist/` folder with optimized, production-ready files.

> 💡 **Note:** The contact form is static by default so you can easily connect it to **Netlify Forms** (add `data-netlify="true"` to `<form>`), **Formspree**, **Web3Forms**, or your own backend endpoint.

---

## 📄 Customizing Your Content

- **Images & Video:** Replace the placeholder files inside `public/assets/` and `public/video/` with your own photos and recital clips.
- **Social Links & Calendar:** Update the placeholder URLs in the desktop social sidebar, footer, and Events calendar button in `index.html`.
- **Downloadable CV / Bio (Optional):** Place your `cv.pdf` inside `public/` and link to it anywhere in `index.html`:
  ```html
  <a href="/cv.pdf" download>Download CV</a>
  ```

---

## 📁 Folder Structure Overview

```text
Piano-Coach-Template/
├── index.html          # Main landing page
├── package.json        # Project scripts and dependencies
├── public/
│   ├── assets/         # Images and thumbnails
│   └── video/          # Recital video files
└── src/
    ├── style.css       # Tailwind CSS and custom styles
    └── main.js         # Menu, tabs, video modal, and AOS scripts
```

---

## 💬 Credits

- **Template Design & Development:** AH / simpleWebDesigns
- **Photography:** [Unsplash](https://unsplash.com/)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Typography:** [Google Fonts](https://fonts.google.com/)
