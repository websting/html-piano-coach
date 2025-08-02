
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