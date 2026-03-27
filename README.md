# 🎹 Piano Coach Template

A modern, responsive one-page HTML template designed for piano coaches, music teachers, and creative professionals who want to showcase lessons, programs, and events with style.

---

## 📸 Live Demo

**Preview:** [Piano Coach Template](https://ahtml-piano-coach-template.netlify.app/)

---

## 🚀 Features

- 🎵 Smooth scrolling and responsive layout
- 💨 Styled with **Tailwind CSS 4.x**
- ✨ Animated scroll effects powered by **AOS**
- 🎤 Modern hero section with call-to-action buttons
- 🎓 Program cards (Beginner, Intermediate, Advanced)
- 🎹 Events and recital highlights section
- 💌 Contact form design *(non-functional by default)*
- 📱 Mobile hamburger menu and animated side navigation
- 🔗 Social media sidebar with hover effects
- 🛠️ Easy to customize and adapt for your own brand

---

## 🧱 Tech Stack

- **HTML5**
- **Tailwind CSS**
- **JavaScript** (AOS animation library, optional form handling)
- **Font Awesome** icons
- **Unsplash** high-resolution photos

---

## 🛠️ Set up instructions:

1. **Unzip** the downloaded template folder.

2. **Open a terminal** and navigate to the project's folder:
   ```bash
   cd piano-coach-download

3. **Install dependencies:**  
   ``` bash
       npm install

4. **Start the development server:** 
   ```bash
    npm run dev
   Your local dev server will run at http://localhost:5173 (or a similar port)
   
5. **Build for production:** 
   ```bash
      npm run build
   This generates a dist/ folder with optimized, production-ready files.

💡 Note:
The contact form is static and does not collect messages by default.
You can connect it to Google Sheets, Netlify Forms, or your own backend if needed.
(Integration setup not included.)

## 📄 Activating the Download CV Button

1. Place your cv.pdf file inside the public/ (or assets/) folder.
2. Find the Download CV button in your HTML or component file.
3. Update the link path and add the download attribute:
   <a href="/cv.pdf" download class="btn">Download CV</a>


## 📁 Folder Structure Overview

Piano-Coach-Template/
├── index.html          # Main landing page
├── public/
│   └── assets/         # Images and media files
└── src/
    ├── css/            # Tailwind and custom styles
    └── js/             # Scripts and AOS initialization     


## 💬 Credits

Template design & development: AH / simpleWebDesigns
Photos: Unsplash:  https://unsplash.com/
Icons: Font Awesome:  https://fontawesome.com/
Fonts:  Google Fonts:  https://fonts.google.com/