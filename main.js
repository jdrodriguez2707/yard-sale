// Select DOM elements
const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");
const shoppingCartIcon = document.querySelector("#shopping-cart-icon");
const shoppingCartAside = document.querySelector("#shopping-cart-aside");
const navbarEmail = document.querySelector("#navbar-email");
const desktopMenu = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");

// Handle click on mobile menu icon
barsIcon.addEventListener("click", () => {
  closeIfIsOpened(shoppingCartAside, "inactive");
  toggleElementWithClass(mobileMenu, "inactive");
});

// Handle click on shopping cart icon
shoppingCartIcon.addEventListener("click", () => {
  closeIfIsOpened(mobileMenu, "inactive");
  closeIfIsOpened(desktopMenu, "inactive");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
  toggleElementWithClass(shoppingCartAside, "inactive");
});

// Handle click on navbar email
navbarEmail.addEventListener("click", () => {
  closeIfIsOpened(shoppingCartAside, "inactive");
  toggleElementWithClass(desktopMenu, "inactive");
  toggleElementWithClass(navbarIconExpand, "navbar__icon-expand--inverted");
});

// To toggle class on an element
function toggleElementWithClass(element, className) {
  element.classList.toggle(className);
}

// To close or hide element if it is open
function closeIfIsOpened(element, className) {
  const isElementClosed = element.classList.contains(className);
  if (!isElementClosed) {
    element.classList.add(className); // Hide element by adding the 'inactive' class
  }
}
