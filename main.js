// Select DOM elements
const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");
const mobileMenuCloseIcon = document.querySelector("#menu-mobile-close-icon");
const shoppingCartArrowLeftIconMobile = document.querySelector("#sp-cart-aside-arrow-left-icon-mobile");
const shoppingCartIcon = document.querySelector("#shopping-cart-icon");
const shoppingCartAside = document.querySelector("#shopping-cart-aside");
const shoppingCartArrowLeftIcon = document.querySelector("#sp-cart-arrow-left-icon");
const shoppingCartEmptyContainer = document.querySelector("#shopping-cart-empty-container");
const shoppingCartProductContainer = document.querySelector("#shopping-cart-product-container");
const shoppingCartProducts = []; // Save products to check if the shopping cart becomes empty later
const shoppingCartTotalToPay = document.querySelector("#shopping-cart-total-to-pay");
const shoppingCartCheckoutButton = document.querySelector("#shopping-cart-checkout-button");
const navbarEmail = document.querySelector("#navbar-email");
const desktopMenu = document.querySelector("#menu-desktop");
const navbarIconExpand = document.querySelector("#navbar-icon-expand");
const productContainer = document.querySelector("#products-container");
const productDetailsAside = document.querySelector("#product-details-aside");
const productDetailsCloseIcon = document.querySelector("#product-details-close-icon");
const productDetailsImage = document.querySelector("#product-details-image");
const productDetailsPrice = document.querySelector("#product-details-price");
const productDetailsName = document.querySelector("#product-details-name");
const productDetailsDescription = document.querySelector("#product-details-description");

// Handle click on mobile menu icon
barsIcon.addEventListener("click", () => {
  closeIfIsOpen(shoppingCartAside, "inactive");
  toggleElementWithClass(mobileMenu, "inactive");
  toggleElementWithClass(document.body, "no-scrolling"); // Avoid scrolling in the background the menu mobile is open
  closeIfIsOpen(productDetailsAside, "inactive");
});

// Close mobile menu by clicking on the close icon
mobileMenuCloseIcon.addEventListener("click", () => {
  hideElement(mobileMenu);
});

// Close shopping cart aside on mobile by clicking on the arrow left icon
shoppingCartArrowLeftIconMobile.addEventListener("click", () => {
  hideElement(shoppingCartAside);
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

// Close window if they're open by clicking anywhere in the body without including certain areas
document.body.addEventListener("click", (event) => {
  if (
    // Excluded areas for clicking
    !event.target.closest(".navbar") &&
    !event.target.closest(".aside-container") &&
    !event.target.closest(".product-container") &&
    !event.target.closest(".products-container__product-card")
  ) {
    closeIfIsOpen(shoppingCartAside, "inactive");
    closeIfIsOpen(desktopMenu, "inactive");
    closeIfIsOpen(productDetailsAside, "inactive");
  }
});

// Close shopping cart aside by clicking on the arrow left icon
shoppingCartArrowLeftIcon.addEventListener("click", () => {
  hideElement(shoppingCartAside);
});

// Close product details aside by clicking on the close icon
productDetailsCloseIcon.addEventListener("click", () => {
  hideElement(productDetailsAside);
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

// Hide an element directly
function hideElement(element) {
  element.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  description: 'Discover new trails and conquer challenging terrains with our "Adventure Explorer" All-Terrain Mountain Bike. Designed for cycling enthusiasts seeking thrilling adventures, this bike combines exceptional performance with a rugged and stylish design.',
  imageURL:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  imageDescription: "A bike",
});

productList.push({
  name: "MacBook",
  price: 2000,
  description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability.",
  imageURL:
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  imageDescription: "An expensive MacBook",
});

productList.push({
  name: "Monitor",
  price: 400,
  description: "Upgrade your workspace with this high-quality DELL monitor. Featuring a crisp 24-inch Full HD display, this monitor delivers stunning visuals with vibrant colors and sharp details. Ideal for both work and entertainment, it offers excellent viewing angles and a sleek, modern design. Equipped with HDMI and VGA ports, it ensures easy connectivity to various devices. The monitor is in excellent condition, well-maintained, and comes with the original stand and power cable. Perfect for enhancing productivity or enjoying multimedia content. Don't miss out on this great deal!",
  imageURL: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg",
  imageDescription: "A cool PC monitor",
});

function displayProductsOnHome(productList) {
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
      productDetailsImage.setAttribute("src", productImage.src);
      productDetailsImage.setAttribute("alt", productImage.alt);
      productDetailsPrice.innerText = productPrice.textContent;
      productDetailsName.innerText = productName.textContent;
      productDetailsDescription.innerText = productDescription;
      closeIfIsOpen(shoppingCartAside, "inactive");
      closeIfIsOpen(desktopMenu, "inactive");
      navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
    });

    productImageContainer.appendChild(productImage);

    // Save the values of the 'src' and 'alt' attributes of the product image to display them in the shopping cart aside later
    const productImageSrc = product.imageURL;
    const productImageAlt = product.imageDescription;

    const productInfo = document.createElement("div");
    productInfo.classList.add("products-container__product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.classList.add("products-container__product-price");
    productPrice.innerText = "$" + product.price;

    // Save product price to display it on the shopping cart aside later
    const productPriceShoppingCart = product.price;

    const productName = document.createElement("p");
    productName.classList.add("products-container__product-name");
    productName.innerText = product.name;

    // Save product name to display it on the shopping cart aside later
    const productNameShoppingCart = product.name;

    productInfoDiv.append(productPrice, productName);

    // Save product description to display it on the product details aside later
    const productDescription = product.description;

    const addToCartIconContainer = document.createElement("figure");
    addToCartIconContainer.classList.add("products-container__icon-container");
    addToCartIconContainer.addEventListener("click", () => {
      addToCartIcon.setAttribute("src", "./assets/icons/bt_added_to_cart.svg");
      addToCartIcon.classList.replace("products-container__add-to-cart-icon", "products-container__added-to-cart-icon");
      addToCartIcon.setAttribute("alt", "Added to cart icon");
      shoppingCartEmptyContainer.classList.add("inactive");
      displayProductsOnShoppingCart(
        productImageSrc, 
        productImageAlt, 
        productNameShoppingCart, 
        productPriceShoppingCart, 
        addToCartIcon,
        addToCartIconContainer
      );
      addToCartIconContainer.classList.add("disabled");
      alert("Product added successfully! ✅");
    });

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

function displayProductsOnShoppingCart(productImgSrc, productImgAlt, productName, productPrice, addedToCartIcon, iconContainer) {
  const shoppingCartProductDiv = document.createElement("div");
  shoppingCartProductDiv.classList.add("shopping-cart__product");

  const shoppingCartProductImageContainer = document.createElement("figure");
  shoppingCartProductImageContainer.classList.add("shopping-cart__product-image-container");

  const shoppingCartProductImage = document.createElement("img");
  shoppingCartProductImage.classList.add("shopping-cart__product-image");
  shoppingCartProductImage.setAttribute("src", productImgSrc);
  shoppingCartProductImage.setAttribute("alt", productImgAlt);

  const shoppingCartProductName = document.createElement("figcaption");
  shoppingCartProductName.classList.add("shopping-cart__product-name");
  shoppingCartProductName.innerText = productName;

  shoppingCartProductImageContainer.append(shoppingCartProductImage, shoppingCartProductName);

  const shoppingCartPriceContainer = document.createElement("div");
  shoppingCartPriceContainer.classList.add("shopping-cart__price-container");

  const shoppingCartProductPrice = document.createElement("p");
  shoppingCartProductPrice.classList.add("shopping-cart__product-price");
  shoppingCartProductPrice.innerText = "$" + productPrice;

  const shoppingCartDeleteIconContainer = document.createElement("figure");
  shoppingCartDeleteIconContainer.classList.add("shopping-cart__delete-icon-container");
  shoppingCartDeleteIconContainer.addEventListener("click", () => {
    shoppingCartProductDiv.classList.add("inactive");

    shoppingCartProducts.pop();
    if (!shoppingCartProducts.length) {
      shoppingCartEmptyContainer.classList.remove("inactive");
      shoppingCartTotalToPay.classList.add("inactive");
      shoppingCartCheckoutButton.classList.add("inactive");
    }

    iconContainer.classList.remove("disabled");
    addedToCartIcon.classList.replace("products-container__added-to-cart-icon", "products-container__add-to-cart-icon");
    addedToCartIcon.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    addedToCartIcon.setAttribute("alt", "Add to cart icon");
    alert("Product removed successfully! ✅");
  });

  const shoppingCartDeleteIcon = document.createElement("img");
  shoppingCartDeleteIcon.classList.add("shopping-cart__delete-icon");
  shoppingCartDeleteIcon.setAttribute("src", "./assets/icons/icon_close.png");
  shoppingCartDeleteIcon.setAttribute("alt", "Delete icon");

  shoppingCartDeleteIconContainer.appendChild(shoppingCartDeleteIcon);
  shoppingCartPriceContainer.append(shoppingCartProductPrice, shoppingCartDeleteIconContainer);

  shoppingCartProductDiv.append(shoppingCartProductImageContainer, shoppingCartPriceContainer);
  shoppingCartProductContainer.appendChild(shoppingCartProductDiv);

  shoppingCartProducts.push(shoppingCartProductDiv);

  shoppingCartTotalToPay.classList.remove("inactive");
  shoppingCartCheckoutButton.classList.remove("inactive");
}

displayProductsOnHome(productList);
