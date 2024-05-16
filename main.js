const navbarEmail = document.querySelector("#navbar-email");
const menuDesktop = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");

navbarEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  menuDesktop.classList.toggle("menu-desktop--inactive");
  navbarIconExpand.classList.toggle("navbar__icon-expand--inverted");
}
