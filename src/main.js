
// Stylesheet
import './style.css';

// Mobile menu functionality
const menu = document.getElementById("sideMenu");
const openBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

openBtn.onclick = () => {
  menu.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
};

closeBtn.onclick = () => {
  menu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");


};

overlay.onclick = closeBtn.onclick;

document.querySelectorAll("#sideMenu a").forEach(link => {
  link.onclick = () => {
    menu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  };
});

// Program tab functionality
window.showProgram = function (program) {
  document.querySelectorAll(".program-tab").forEach(tab => {
    tab.classList.add("hidden");
  });

  document.getElementById(`program-${program}`).classList.remove("hidden");
};

// Video modal functionality
window.toggleVideo = function () {
  const modal = document.getElementById("video-modal");
  modal.classList.toggle("hidden");
  modal.classList.toggle("flex");
};