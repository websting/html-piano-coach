// ==========================================
// STYLESHEET IMPORT (VITE ENTRY POINT)
// ==========================================
import './style.css';


// ==========================================
// MOBILE NAVIGATION DRAWER
// ==========================================
const menu = document.getElementById("sideMenu");
const openBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

// Slide side menu in and show backdrop overlay
openBtn.onclick = () => {
  menu.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
};

// Slide side menu out and hide backdrop overlay
closeBtn.onclick = () => {
  menu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
};

// Close menu when clicking outside on the dark overlay
overlay.onclick = closeBtn.onclick;

// Close menu automatically after clicking any navigation link
document.querySelectorAll("#sideMenu a").forEach(link => {
  link.onclick = () => {
    menu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  };
});


// ==========================================
// COACHING PROGRAMS TAB SWITCHER
// ==========================================
// Attached to window so inline onclick="showProgram(...)" handlers in HTML can access it
window.showProgram = function (program) {
  // 1. Hide all program panels first
  document.querySelectorAll(".program-tab").forEach(tab => {
    tab.classList.add("hidden");
  });

  // 2. Reveal the selected program panel (beginner, intermediate, or advanced)
  document.getElementById(`program-${program}`).classList.remove("hidden");

  // 3. Reset all tab buttons to inactive outline styling
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("bg-yellow-400", "text-black", "font-semibold");
    btn.classList.add("border", "border-gray-600", "hover:bg-gray-800");
  });

  // 4. Highlight the active tab button in gold
  const activeBtn = document.querySelector(`.tab-btn[onclick="showProgram('${program}')"]`);
  if (activeBtn) {
    activeBtn.classList.remove("border", "border-gray-600", "hover:bg-gray-800");
    activeBtn.classList.add("bg-yellow-400", "text-black", "font-semibold");
  }
};


// ==========================================
// EVENTS VIDEO LIGHTBOX MODAL
// ==========================================
// Attached to window so inline onclick="toggleVideo()" handlers can open/close the modal
window.toggleVideo = function () {
  const modal = document.getElementById("video-modal");
  const video = modal.querySelector("video");

  modal.classList.toggle("hidden");
  modal.classList.toggle("flex");

  // Pause audio/playback when closing the modal, or play from current spot when opening
  if (video) {
    if (modal.classList.contains("hidden")) {
      video.pause();
    } else {
      video.muted = false; // Unmute the video when opening the modal
      video.play();
    }
  }
};


