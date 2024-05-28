// Select DOM elements
const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");
const shoppingCartIcon = document.querySelector("#shopping-cart-icon");
const shoppingCartAside = document.querySelector("#shopping-cart-aside");
const navbarEmail = document.querySelector("#navbar-email");
const desktopMenu = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");
const productContainer = document.querySelector("#products-container");
const productDetailsAside = document.querySelector("#product-details-aside");
const productDetailsCloseIcon = document.querySelector("#product-details-close-icon");

// Handle click on mobile menu icon
barsIcon.addEventListener("click", () => {
  closeIfIsOpen(shoppingCartAside, "inactive");
  toggleElementWithClass(mobileMenu, "inactive");
  toggleElementWithClass(document.body, "no-scrolling"); // Avoid scrolling in the background the menu mobile is open
  closeIfIsOpen(productDetailsAside, "inactive");
});

// Handle click on shopping cart icon
shoppingCartIcon.addEventListener("click", () => {
  closeIfIsOpen(mobileMenu, "inactive");
  closeIfIsOpen(desktopMenu, "inactive");
  closeIfIsOpen(productDetailsAside, "inactive");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
  toggleElementWithClass(shoppingCartAside, "inactive");
  toggleElementWithClass(document.body, "no-scrolling");
});

// Handle click on navbar email
navbarEmail.addEventListener("click", () => {
  closeIfIsOpen(shoppingCartAside, "inactive");
  toggleElementWithClass(desktopMenu, "inactive");
  toggleElementWithClass(navbarIconExpand, "navbar__icon-expand--inverted");
  closeIfIsOpen(productDetailsAside, "inactive");
});

// Close window if they're open by clicking anywhere in the body without including the header, the shopping cart or the products
document.body.addEventListener("click", (event) => {
  if (
    // Excluded areas for clicking
    !event.target.closest(".navbar") &&
    !event.target.closest(".shopping-cart") &&
    !event.target.closest(".products-container__product-card")
  ) {
    closeIfIsOpen(shoppingCartAside, "inactive");
    closeIfIsOpen(desktopMenu, "inactive");
    closeIfIsOpen(productDetailsAside, "inactive");
  }
});

// Close product details aside by clicking on the close icon
productDetailsCloseIcon.addEventListener("click", () => {
  productDetailsAside.classList.add("inactive");
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

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  imageURL:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  imageDescription: "A bike",
});

productList.push({
  name: "MacBook",
  price: 2000,
  imageURL:
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  imageDescription: "An expensive MacBook",
});

productList.push({
  name: "Monitor",
  price: 400,
  imageURL: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg",
  imageDescription: "A cool PC monitor",
});

function displayProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("products-container__product-card");

    const productImageContainer = document.createElement("figure");
    productImageContainer.classList.add("products-container__product-img-container");

    const productImage = document.createElement("img");
    productImage.classList.add("products-container__product-image");
    productImage.setAttribute("src", product.imageURL);
    productImage.setAttribute("alt", product.imageDescription);
    productImage.addEventListener("click", () => {
      productDetailsAside.classList.remove("inactive");
      closeIfIsOpen(shoppingCartAside, "inactive");
      closeIfIsOpen(desktopMenu, "inactive");
      navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
    });

    productImageContainer.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("products-container__product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.classList.add("products-container__product-price");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.classList.add("products-container__product-name");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const addToCartIconContainer = document.createElement("figure");
    addToCartIconContainer.classList.add("products-container__icon-container");

    const addToCartIcon = document.createElement("img");
    addToCartIcon.classList.add("products-container__add-to-cart-icon");
    addToCartIcon.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    addToCartIcon.setAttribute("alt", "Add to cart icon");

    addToCartIconContainer.appendChild(addToCartIcon);
    productInfo.append(productInfoDiv, addToCartIconContainer);
    productCard.append(productImageContainer, productInfo);
    productContainer.append(productCard);
  }
}

displayProducts(productList);
