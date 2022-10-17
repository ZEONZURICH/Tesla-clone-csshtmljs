document.querySelector(".hamburger").addEventListener("click", function () {
  var hamburger = document.querySelector("#nav-icon4");
  var mobileMenu = document.querySelector(".mobile-menu");
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("menu-show");
});
