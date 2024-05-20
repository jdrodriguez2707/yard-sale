const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");
const navbarEmail = document.querySelector("#navbar-email");
const desktopMenu = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");

barsIcon.addEventListener("click", () => {
  toggleElementWithClass(mobileMenu, "inactive");
});

navbarEmail.addEventListener("click", () => {
  toggleElementWithClass(desktopMenu, "inactive");
  toggleElementWithClass(navbarIconExpand, "navbar__icon-expand--inverted");
});

function toggleElementWithClass(element, className) {
  element.classList.toggle(className);
}
