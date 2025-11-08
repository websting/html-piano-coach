
// Stylesheet
import './style.css';

    //  JavaScript for Menu Toggle
      const hamburger = document.getElementById("hamburger");
      const sideNav = document.getElementById("side-nav");
      const closeMenu = document.getElementById("close-menu");
      const menuLinks = document.querySelectorAll("#side-nav a"); // Select all links inside the side-nav

      // Open the side nav
      hamburger.addEventListener("click", () => {
        sideNav.style.transform = "translateX(0)"; // Slide in from the left
        sideNav.classList.remove("-translate-x-full");
        sideNav.classList.add("translate-x-0");
      });

      // Close the side nav
      closeMenu.addEventListener("click", () => {
        sideNav.classList.remove("translate-x-0");
        sideNav.classList.add("-translate-x-full");
        sideNav.style.transform = "translateX(-100%)"; // Slide out to the left
      });

      // Close the side nav when a link is clicked
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          sideNav.style.transform = "translateX(-100%)"; // Close the menu when a link is clicked
        });
      });

    //  AOS Library
      AOS.init();
    
    // Video toggle
        function toggleVideo() {
            const modal = document.getElementById("video-modal");
            modal.classList.toggle("flex"); // Add/remove flex
            modal.classList.toggle("hidden"); // Add/remove hidden
      }

    // Expose functions global scope
    // So functions like toggleVideo() and onclick='toggleVideo() 
    // are attached to window by default
        window.toggleVideo = toggleVideo;


// Program Tabs
        function showProgram(program) {
  document.querySelectorAll('.program-tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(`program-${program}`).classList.remove('hidden');

  // Tab button highlight
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-yellow-400', 'text-black');
    btn.classList.add('text-white', 'border', 'border-gray-600', 'hover:bg-gray-800');
  });
  const activeBtn = document.getElementById(`tab-${program}`);
  activeBtn.classList.remove('text-white', 'border', 'border-gray-600', 'hover:bg-gray-800');
  activeBtn.classList.add('bg-yellow-400', 'text-black');
}

// Expose globally so inline HTML onclick can see it
window.showProgram = showProgram;

// Optional: initialize first tab
document.addEventListener('DOMContentLoaded', () => showProgram('beginner'));
