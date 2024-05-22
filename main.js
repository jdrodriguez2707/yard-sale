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
  closeIfIsOpen(shoppingCartAside, "inactive");
  toggleElementWithClass(mobileMenu, "inactive");
});

// Handle click on shopping cart icon
shoppingCartIcon.addEventListener("click", () => {
  closeIfIsOpen(mobileMenu, "inactive");
  closeIfIsOpen(desktopMenu, "inactive");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
  toggleElementWithClass(shoppingCartAside, "inactive");
});

// Handle click on navbar email
navbarEmail.addEventListener("click", () => {
  closeIfIsOpen(shoppingCartAside, "inactive");
  toggleElementWithClass(desktopMenu, "inactive");
  toggleElementWithClass(navbarIconExpand, "navbar__icon-expand--inverted");
});

// Close window if they're open by clicking anywhere in the body without including the header
document.body.addEventListener("click", (event) => {
  if (
    !event.target.closest(".navbar") &&
    !event.target.closest(".shopping-cart")
  ) {
    closeIfIsOpen(shoppingCartAside, "inactive");
    closeIfIsOpen(desktopMenu, "inactive");
  }
});

// Toggle class on an element
function toggleElementWithClass(element, className) {
  // If the class exists it will be removed, and if the class doesn't exist it will be added
  element.classList.toggle(className);
}

// Close or hide an element if it is open
function closeIfIsOpen(element, className) {
  const isElementClosed = element.classList.contains(className);
  if (!isElementClosed) {
    element.classList.add(className); // Hide element by adding the 'inactive' class
  }
}
