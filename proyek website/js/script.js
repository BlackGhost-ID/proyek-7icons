// Hamburger Menu Functionality
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");

  // Ganti icon menu/close
  const icon = hamburger.querySelector("i");
  if (navbar.classList.contains("active")) {
    icon.setAttribute("data-feather", "x");
  } else {
    icon.setAttribute("data-feather", "menu");
  }
  feather.replace();
});

// Pastikan Feather Icons di-reload saat resize (untuk development)
window.addEventListener("resize", feather.replace);
