# 🎹 Piano Coach Template

A modern, responsive one-page HTML template designed for piano coaches, music teachers, or creative professionals who want to showcase lessons, programs, and events with style.

---

## 📸 Demo

**Live Preview:** (https://ahtml-piano-coach-template.netlify.app/))_

![Piano Coach Screenshot](for-developers/public/assets/template-screenshot.png) <!-- Screenshot -->

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
## 🛠️ Set up instructions come in two versions depending on your confort with code:

## Instructions for Non-Developers (Static Version inside for-non-developers/)
1. **Unzip** the template folder.
2. Upload the entire contents of the for-non-developers folder to your web host or server.
-  After upload, visit your domain and everything will display correctly.
3. For testing, preview using a local server. e.g. In Vs Code you can Right-click index.html in for-non-developers 
-  folder.  Then, choose "Open With Live Server".  Don't double click index.html due to browser security rules.
3. You can replace text, images, and layout by editing the index.html file directly using a text editor.
-  If you want to customize interactivity or layout use the developer version instead.

## Instructions For Developers (Vite Source Version inside for-developers/)
1. **Unzip** the template folder
2. **Open a terminal, navigate to the folder** cd for-developers
3. **Install dependencies:**  npm install
4. **Start the development server:** npm run dev
*. Your template will open in your browser at http://localhost:5173(or whatever port Vite assigns).
5. **Build for production:** npm run build
*. This will genrate a dist/ folder with the production-ready files .Ready for customization + development

> 📩 Note: The contact form is static and **does not collect messages**. You can connect it to Google Sheets, Netlify Forms, or your own backend if needed.  Setup guide is not included, but feel free to use your preferred method of integration.  

## 📄 Activating the Download CV Button

1. Place your cv.pdf file in the public (or assets) folder of your project.
2. Locate the Download CV button in your HTML or component file.
3. Set the href to the PDF path and add the download attribute:
    -example:  <a href="/cv.pdf" download>Download CV</a>
    -Finally when clicked, this will prompt the browser to download the PDF.

---

## 📁 Folder Structure Overview

index.html — main landing page

public/assets — images and media files

src — CSS and JavaScript source files


