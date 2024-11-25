// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(46, 52, 64, 0.95)";
  } else {
    navbar.style.backgroundColor = "rgba(46, 52, 64, 0.95)";
  }
});

// Contact Form Popup Functionality
const contactPopup = document.getElementById("contactPopup");
const openContactBtn = document.getElementById("openContactForm");
const closePopupBtn = document.querySelector(".close-popup");

// Open popup
openContactBtn.addEventListener("click", () => {
  contactPopup.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
});

// Close popup
closePopupBtn.addEventListener("click", () => {
  contactPopup.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Close popup when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

