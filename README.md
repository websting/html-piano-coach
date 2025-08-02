# 🎹 Piano Coach Template

A modern, responsive one-page HTML template designed for piano coaches, music teachers, or creative professionals who want to showcase lessons, programs, and events with style.

---

## 📸 Demo

**Live Preview:** _(optional: include a link if hosted)_

![Piano Coach Screenshot](/public/assets/template-screenshot.png) <!-- Screenshot -->

---


## 🚀 Features

- Smooth scroll and responsive layout
- Tailwind CSS 4.x styling
- Animated scroll effects with AOS
- Stylish hero section with call-to-action buttons
- Program cards (Beginner, Intermediate, Advanced)
- Events and recital highlights section
- Contact form design (non-functional by default)
- Mobile hamburger menu & animated side navigation
- Social media sidebar with hover effects
- Easy to customize for your brand

---

## 🧱 Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (optional: AOS & form handling)
- Font Awesome icons
- Unsplush High Resolution Photos

---

## 🛠️ Setup Instructions for Non-Developers (Static Version)

1. **Unzip** the template folder.
2. Open `index.html` in your browser to view the site.
3. Customize content in `index.html` and styles in `/src/style.css`.
4. Replace images and video clips in `assets/` with your own.
5. Built with npm run build.  Works by just opening index.html-no dev setup needed.

## 🛠️ Setup Instructions For Developers (Vite Source Version)

1. **Install dependencies:**  npm install
2. **Start the development server:** npm run dev
3. Personalize the website with your own styles
3. **Build for production:** npm run build
    Ready for customization + development

> 📩 Note 1: The contact form is static and **does not collect messages**. You can connect it to Google Sheets, Netlify Forms, or your own backend if needed.  Setup guide is not included, but feel free to use your preferred method of integration.  

## 📄 Activating the Download CV Button

1. Place your cv.pdf file in the public/ (or assets/) folder of your project.
2. Locate the Download CV button in your HTML or component file.
3. Set the href to the PDF path and add the download attribute:
    -example:  <a href="/cv.pdf" download>Download CV</a>
    -Finally when clicked, this will prompt the browser to download the PDF.

---

## 📁 Folder Structure Overview

index.html — main landing page

public/assets — images and media files

src — CSS and JavaScript source files


