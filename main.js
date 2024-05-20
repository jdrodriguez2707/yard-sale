// Mobile
const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");

// Mobile and desktop
const shoppingCartIcon = document.querySelector("#shopping-cart-icon");
const shoppingCartAside = document.querySelector("#shopping-cart-aside");

// Desktop
const navbarEmail = document.querySelector("#navbar-email");
const desktopMenu = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");


// Mobile
barsIcon.addEventListener("click", () => {
  const isShoppingCartAsideClosed = shoppingCartAside.classList.contains("inactive");

  if (!isShoppingCartAsideClosed) {
    shoppingCartAside.classList.add("inactive");
  }

  toggleElementWithClass(mobileMenu, "inactive");
});

// Mobile and desktop
shoppingCartIcon.addEventListener("click", () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
    navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
  }

  toggleElementWithClass(shoppingCartAside, "inactive");
});

// Desktop
navbarEmail.addEventListener("click", () => {
  const isShoppingCartAsideClosed = shoppingCartAside.classList.contains("inactive");

  if (!isShoppingCartAsideClosed) {
    shoppingCartAside.classList.add("inactive");
  }

  toggleElementWithClass(desktopMenu, "inactive");
  toggleElementWithClass(navbarIconExpand, "navbar__icon-expand--inverted");
});

function toggleElementWithClass(element, className) {
  element.classList.toggle(className);
}
