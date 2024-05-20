const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");
const navbarEmail = document.querySelector("#navbar-email");
const desktopMenu = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");

barsIcon.addEventListener("click", toggleMobileMenu)
navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  navbarIconExpand.classList.toggle("navbar__icon-expand--inverted");
}
