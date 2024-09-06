"use strict";

// Select DOM elements
const barsIcon = document.querySelector("#bars-icon");
const mobileMenu = document.querySelector("#menu-mobile");
const mobileMenuCloseIcon = document.querySelector("#menu-mobile-close-icon");
const navbarLinksMobile = [...document.getElementsByClassName("menu-mobile__category-link")]; // Mobile
const navbarLinks = [...document.getElementsByClassName("navbar__link")]; // Desktop
const yardSaleLogo = document.querySelector("#yard-sale-logo");
const shoppingCartArrowLeftIconMobile = document.querySelector("#sp-cart-aside-arrow-left-icon-mobile");
const shoppingCartIcon = document.querySelector("#shopping-cart-icon");
const shoppingCartNumberOfProducts = document.querySelector("#shopping-cart-number-of-products");
const shoppingCartAside = document.querySelector("#shopping-cart-aside");
const shoppingCartArrowLeftIcon = document.querySelector("#sp-cart-arrow-left-icon");
const shoppingCartEmptyContainer = document.querySelector("#shopping-cart-empty-container");
const shoppingCartProductContainer = document.querySelector("#shopping-cart-product-container");
const shoppingCartProducts = []; // Save products to check if the shopping cart becomes empty later
const shoppingCartTotalToPay = document.querySelector("#shopping-cart-total-to-pay");
const shoppingCartTotalValue = document.querySelector("#shopping-cart-total-value");
let totalToPay = 0; // Accumulator
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
const productDetailsAddToCartButton = document.querySelector("#product-details-add-to-cart-button");
let currentAddToCartListener = null; // Save the current event listener to remove it later
const addedToCartProducts = {}; // Save products added to the shopping cart

// Handle click on mobile menu icon
barsIcon.addEventListener("click", () => {
  closeIfIsOpen(shoppingCartAside, "active");
  toggleElementWithClass(mobileMenu, "active");

  if (mobileMenu.classList.contains("active")) {    
    // Avoid scrolling in the background the menu mobile is open
    document.body.classList.add("no-scrolling");
  } else {
    addScrollingToBody();
  }

  closeIfIsOpen(productDetailsAside, "active");
});

// Close mobile menu by clicking on the close icon
mobileMenuCloseIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  addScrollingToBody();
});

// Close any open element by clicking on the logo
yardSaleLogo.addEventListener("click", () => {
  closeIfIsOpen(mobileMenu, "active");
  closeIfIsOpen(productDetailsAside, "active");
  closeIfIsOpen(shoppingCartAside, "active");
  closeIfIsOpen(desktopMenu, "active");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
  addScrollingToBody();
});

// Close shopping cart aside on mobile by clicking on the arrow left icon
shoppingCartArrowLeftIconMobile.addEventListener("click", () => {
  shoppingCartAside.classList.remove("active");
  addScrollingToBody();
});

// Handle click on shopping cart icon
shoppingCartIcon.addEventListener("click", () => {
  closeIfIsOpen(mobileMenu, "active");
  closeIfIsOpen(desktopMenu, "active");
  closeIfIsOpen(productDetailsAside, "active");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
  toggleElementWithClass(shoppingCartAside, "active");

  if (shoppingCartAside.classList.contains("active")) {
    document.body.classList.add("no-scrolling");
  } else {
    addScrollingToBody();
  }
});

// Handle click on navbar email
navbarEmail.addEventListener("click", () => {
  closeIfIsOpen(shoppingCartAside, "active");
  toggleElementWithClass(desktopMenu, "active");
  toggleElementWithClass(navbarIconExpand, "navbar__icon-expand--inverted");
  productDetailsAside.classList.remove("active");
});

// Close window if they're open by clicking anywhere in the body without including certain areas
document.body.addEventListener("click", (event) => {
  if (
    // Excluded areas for clicking
    !event.target.closest(".navbar__icon") &&
    !event.target.closest(".navbar__right") &&
    !event.target.closest(".aside-container") &&
    !event.target.closest(".product-container") &&
    !event.target.closest(".products-container__product-card")
  ) {
    closeIfIsOpen(shoppingCartAside, "active");
    closeIfIsOpen(desktopMenu, "active");
    closeIfIsOpen(productDetailsAside, "active");
    navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
    addScrollingToBody();
  }
});

// Close shopping cart aside by clicking on the arrow left icon
shoppingCartArrowLeftIcon.addEventListener("click", () => {
  shoppingCartAside.classList.remove("active");
  addScrollingToBody();
});

// Close product details aside by clicking on the close icon
productDetailsCloseIcon.addEventListener("click", () => {
  productDetailsAside.classList.remove("active");
  addScrollingToBody();
});

// Toggle class on an element
function toggleElementWithClass(element, className) {
  // If the class exists it will be removed, and if the class doesn't exist it will be added
  element.classList.toggle(className);
}

// Close or hide an element if it is open
function closeIfIsOpen(element, className) {
  const isElementClosed = element.classList.contains(className);
  if (isElementClosed) {
    element.classList.remove(className); // Hide element by removing the 'active' class
  }
}

// Hide an element directly
function hideElement(element) {
  element.classList.add("inactive");
}

// Add scrolling to the body when closing an element
function addScrollingToBody() {
  document.body.classList.remove("no-scrolling");
  document.body.removeAttribute("class");
}

const productList = [];

// Products
productList.push({
  id: 1,
  name: "MacBook",
  price: 2000,
  description: "MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips. Built on 3‑nanometer technology and featuring an all-new GPU architecture, they’re the most advanced chips ever built for a personal computer. And each one brings more pro performance and capability.",
  imageURL: "./assets/images/macbook.jpg",
  imageDescription: "An expensive MacBook",
  category: "electronics"
});

productList.push({
  id: 2,
  name: "Monitor",
  price: 400,
  description: "Upgrade your workspace with this high-quality DELL monitor. Featuring a crisp 24-inch Full HD display, this monitor delivers stunning visuals with vibrant colors and sharp details. Ideal for both work and entertainment, it offers excellent viewing angles and a sleek, modern design. Equipped with HDMI and VGA ports, it ensures easy connectivity to various devices. The monitor is in excellent condition, well-maintained, and comes with the original stand and power cable. Perfect for enhancing productivity or enjoying multimedia content. Don't miss out on this great deal!",
  imageURL: "./assets/images/monitor.jpg",
  imageDescription: "A cool PC monitor",
  category: "electronics"
});

productList.push({
  id: 3,
  name: "Black sofa",
  price: 400,
  description: "A stylish and comfortable black sofa that adds a touch of elegance to any living space. Made with high-quality materials, this sofa offers exceptional durability and support. Perfect for relaxing and entertaining guests, it's the ideal addition to your home decor.",
  imageURL: "./assets/images/black-sofa.jpg",
  imageDescription: "Black Fabric Sectional Sofa Near Glass Window",
  category: "furniture"
});

productList.push({
  id: 4,
  name: "White leather sofa",
  price: 200,
  description: "Add a touch of elegance to your living room with this stylish white leather sofa. Made with high-quality materials, this sofa offers exceptional comfort and durability. The sleek design and neutral color make it easy to match with any decor style. Whether you're relaxing with family or entertaining guests, this sofa is the perfect choice for your home.",
  imageURL: "./assets/images/white-leather-sofa.jpg",
  imageDescription: "Two Pillows on White Leather Fainting Couch",
  category: "furniture"
});

productList.push({
  id: 5,
  name: "Dinning table",
  price: 110,
  description: "Upgrade your dining room with this elegant dining table. Made with high-quality materials, this table offers exceptional durability and style. The sleek design and neutral color make it easy to match with any decor style. Whether you're hosting a dinner party or enjoying a family meal, this table is the perfect choice for your home.",
  imageURL: "./assets/images/dinning-table.jpg",
  imageDescription: "A simple dinning table",
  category: "furniture"
});

productList.push({
  id: 6,
  name: "Gray and Black Striped Crew-neck Top",
  price: 20,
  description: "Stay stylish and comfortable with this gray and black striped crew-neck top. Made with high-quality materials, this top offers exceptional comfort and durability. The classic design and neutral colors make it easy to match with any outfit. Whether you're running errands or relaxing at home, this top is the perfect choice for everyday wear.",
  imageURL: "./assets/images/gray-and-black-striped-crew.jpg",
  imageDescription: "A gray and black striped crew-neck top",
  category: "clothes"
});

productList.push({
  id: 7,
  name: "Pair of Black Dress Shoes",
  price: 20,
  description: "Step out in style with this pair of black dress shoes. Made with high-quality materials, these shoes offer exceptional comfort and durability. The classic design and sleek black color make them easy to match with any outfit. Whether you're heading to the office or a special event, these shoes are the perfect choice for a polished look.",
  imageURL: "./assets/images/pair-of-black-dress-shoes.jpg",
  imageDescription: "A pair of black dress shoes",
  category: "clothes"
});

productList.push({
  id: 8,
  name: "Super Mario, Luigi, and Yoshi Figurines",
  price: 10,
  description: "Add a touch of nostalgia to your collection with these Super Mario, Luigi, and Yoshi figurines. Made with high-quality materials, these figurines offer exceptional detail and durability. Whether you're a fan of the classic video game series or simply love collecting unique items, these figurines are the perfect addition to your home decor.",
  imageURL: "./assets/images/super-mario-toys.jpg",
  imageDescription: "Super Mario, Luigi, and Yoshi figurines",
  category: "toys"
});

productList.push({
  id: 9,
  name: "Plastic Animal Toys",
  price: 4,
  description: "Let your child's imagination run wild with this set of plastic animal toys. Made with high-quality materials, these toys offer exceptional durability and safety. The bright colors and realistic designs make them perfect for creative play. Whether your child loves animals or simply enjoys imaginative play, these toys are sure to provide hours of entertainment.",
  imageURL: "./assets/images/plastic-animal-toys.jpg",
  imageDescription: "Plastic animal toys",
  category: "toys"
});

productList.push({
  id: 10,
  name: "White Sheep Plush Toy",
  price: 8,
  description: "Cuddle up with this adorable white sheep plush toy. Made with soft, high-quality materials, this plush toy offers exceptional comfort and durability. The cute design and fluffy texture make it perfect for snuggling and play. Whether you're looking for a fun gift or a cozy companion, this sheep plush toy is sure to bring a smile to your face.",
  imageURL: "./assets/images/white-sheep-plush-toy.jpg",
  imageDescription: "A white sheep plush toy",
  category: "toys"
});

productList.push({
  id: 11,
  name: "Bike",
  price: 120,
  description: 'Discover new trails and conquer challenging terrains with our "Adventure Explorer" All-Terrain Mountain Bike. Designed for cycling enthusiasts seeking thrilling adventures, this bike combines exceptional performance with a rugged and stylish design.',
  imageURL: "./assets/images/bike.jpg",
  imageDescription: "A bike",
  category: "others"
});

productList.push({
  id: 12,
  name: "Orange and Black Ball",
  price: 12,
  description: "Get ready for hours of fun with this orange and black ball. Made with high-quality materials, this ball offers exceptional durability and bounce. The bright colors and unique design make it perfect for outdoor games and sports. Whether you're playing catch with friends or practicing your soccer skills, this ball is sure to provide endless entertainment.",
  imageURL: "./assets/images/orange-ball.jpg",
  imageDescription: "An orange and black ball",
  category: "others"
});

productList.push({
  id: 13,
  name: "Black and White Basketball Ball",
  price: 15,
  description: "Take your game to the next level with this black and white basketball ball. Made with high-quality materials, this ball offers exceptional grip and bounce. The classic design and durable construction make it perfect for outdoor games and sports. Whether you're shooting hoops with friends or practicing your skills, this ball is sure to elevate your game.",
  imageURL: "./assets/images/black-and-white-basketball-ball.jpg",
  imageDescription: "A black and white basketball ball",
  category: "others"
});

productList.push({
  id: 14,
  name: "Two 2 Kg. Blue Hex Dumbbells",
  price: 20,
  description: "Get fit and stay healthy with this set of two 2 kg. blue hex dumbbells. Made with high-quality materials, these dumbbells offer exceptional durability and comfort. The hexagonal design prevents rolling and ensures stability during workouts. Whether you're strength training or toning your muscles, these dumbbells are the perfect addition to your home gym.",
  imageURL: "./assets/images/dumbbells.jpg",
  imageDescription: "Two 2 Kg. Blue Hex Dumbbells",
  category: "others"
});

function displayProductsOnHome(productList) {
  for (const product of productList) {
    const productId = product.id;

    const productCard = document.createElement("div");
    productCard.classList.add("products-container__product-card");

    const productImageContainer = document.createElement("figure");
    productImageContainer.classList.add("products-container__product-img-container");

    const productImage = document.createElement("img");
    productImage.classList.add("products-container__product-image");
    productImage.setAttribute("src", product.imageURL);
    productImage.setAttribute("alt", product.imageDescription);

    // Show product details aside when clicking on the product image
    productImage.addEventListener("click", () => {
      productDetailsAside.classList.add("active");
      productDetailsImage.setAttribute("src", productImage.src);
      productDetailsImage.setAttribute("alt", productImage.alt);
      productDetailsPrice.innerText = productPrice.textContent;
      productDetailsName.innerText = productName.textContent;
      productDetailsDescription.innerText = productDescription;

      // Handle add to cart button events in product details aside

      // Delete the previous event listener to avoid adding multiple event listeners
      if (currentAddToCartListener) {
        productDetailsAddToCartButton.removeEventListener("click", currentAddToCartListener);
      }
      
      // Create a new event listener
      const newAddToCartListener = () => addProductToShoppingCart(productId);
      productDetailsAddToCartButton.addEventListener("click", newAddToCartListener);

      // Update the current event listener
      currentAddToCartListener = newAddToCartListener;

      // Disable the add to cart button in product details aside if the product is already added to the shopping cart
      if (addedToCartProducts[productId]) {
        productDetailsAddToCartButton.classList.add("disabled");
      } else {
        productDetailsAddToCartButton.classList.remove("disabled");
      }

      closeIfIsOpen(shoppingCartAside, "active");
      closeIfIsOpen(desktopMenu, "active");
      navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
      document.body.classList.add("no-scrolling");      
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
    productPrice.innerText = `$${product.price}`;

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

    // Add product to the shopping cart aside when clicking on the add to cart icon
    addToCartIconContainer.addEventListener("click", () => {
      addProductToShoppingCart(productId);
    });

    const addToCartIcon = document.createElement("img");
    addToCartIcon.classList.add("products-container__add-to-cart-icon");
    addToCartIcon.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    addToCartIcon.setAttribute("alt", "Add to cart icon");
    addToCartIcon.setAttribute("data-product-id", productId);

    addToCartIconContainer.appendChild(addToCartIcon);
    productInfo.append(productInfoDiv, addToCartIconContainer);
    productCard.append(productImageContainer, productInfo);
    productContainer.append(productCard);

    function addProductToShoppingCart(productId) {
      // Mark the product as added to the shopping cart
      addedToCartProducts[productId] = true;

      // Update the number of products in the shopping cart
      shoppingCartNumberOfProducts.innerText++;

      // Change the icon to the added to cart icon
      addToCartIcon.setAttribute("src", "./assets/icons/bt_added_to_cart.svg");
      addToCartIcon.classList.replace("products-container__add-to-cart-icon", "products-container__added-to-cart-icon");
      addToCartIcon.setAttribute("alt", "Added to cart icon");

      // Hide the empty shopping cart message
      hideElement(shoppingCartEmptyContainer);

      displayProductsOnShoppingCart(
        productId,
        productImageSrc, 
        productImageAlt, 
        productNameShoppingCart, 
        productPriceShoppingCart, 
        addToCartIcon,
        addToCartIconContainer,
        productDetailsAddToCartButton
      );

      // Disable the add to cart icon after adding the product to the shopping cart
      addToCartIconContainer.classList.add("disabled");

      // Disable the add to cart icon in product details aside after adding the product to the shopping cart
      productDetailsAddToCartButton.classList.add("disabled");

      alert("Product added successfully! ✅");
    }

    if (addedToCartProducts[productId]) {
      addToCartIcon.setAttribute("src", "./assets/icons/bt_added_to_cart.svg");
      addToCartIcon.classList.replace("products-container__add-to-cart-icon", "products-container__added-to-cart-icon");
      addToCartIcon.setAttribute("alt", "Added to cart icon");
      addToCartIconContainer.classList.add("disabled");
    }
  }
}

function displayProductsOnShoppingCart(
  productId,
  productImgSrc, 
  productImgAlt, 
  productName, 
  productPrice, 
  addToCartIcon, 
  iconContainer, 
  productDetailsAddToCartIcon
) {
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
  shoppingCartProductPrice.innerText = `$${productPrice}`;

  const shoppingCartDeleteIconContainer = document.createElement("figure");
  shoppingCartDeleteIconContainer.classList.add("shopping-cart__delete-icon-container");

  // Remove product from the shopping cart aside when clicking on the delete icon
  shoppingCartDeleteIconContainer.addEventListener("click", () => {
    // Remove the product from the shopping cart aside and update the total to pay
    shoppingCartProductDiv.classList.add("fade-out");
    totalToPay -= productPrice;
    shoppingCartTotalValue.innerText = `$${totalToPay}`;

    // Remove the product from the shopping cart products array to check if the shopping cart becomes empty later on and show the empty shopping cart message
    shoppingCartProducts.pop();
    if (!shoppingCartProducts.length) {
      setTimeout(() => {
        shoppingCartEmptyContainer.classList.remove("inactive");
        hideElement(shoppingCartTotalToPay);
        hideElement(shoppingCartCheckoutButton);
      }, 500); 
    }

    // Mark the product as not added to the shopping cart
    addedToCartProducts[productId] = false;

    // Enable the add to cart icon after removing the product from the shopping cart aside and change the icon to the add to cart icon again
    iconContainer.classList.remove("disabled");
    addToCartIcon.classList.replace("products-container__added-to-cart-icon", "products-container__add-to-cart-icon");
    addToCartIcon.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    addToCartIcon.setAttribute("alt", "Add to cart icon");
    // alert("Product removed successfully! ✅");

    if (!addedToCartProducts[productId]) {
      // Enable the add to cart icon in product details aside after removing the product from the shopping cart
      productDetailsAddToCartIcon.classList.remove("disabled");
    }

    // Update the number of products in the shopping cart when removing a product from the shopping cart aside
    shoppingCartNumberOfProducts.innerText--;

    updateAddToCartButtonsState();
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
  
  // Update the total to pay when adding a product to the shopping cart aside
  totalToPay += productPrice;
  shoppingCartTotalValue.innerText = `$${totalToPay}`;
}

function updateAddToCartButtonsState() {
  const allAddToCartIcons = document.querySelectorAll('.products-container__add-to-cart-icon, .products-container__added-to-cart-icon');
  allAddToCartIcons.forEach((icon) => {
    const productId = icon.getAttribute('data-product-id');
    if (addedToCartProducts[productId]) {
      icon.setAttribute("src", "./assets/icons/bt_added_to_cart.svg");
      icon.classList.replace("products-container__add-to-cart-icon", "products-container__added-to-cart-icon");
      icon.setAttribute("alt", "Added to cart icon");
      icon.closest('.products-container__icon-container').classList.add("disabled");
    } else {
      icon.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
      icon.classList.replace("products-container__added-to-cart-icon", "products-container__add-to-cart-icon");
      icon.setAttribute("alt", "Add to cart icon");
      icon.closest('.products-container__icon-container').classList.remove("disabled");
    }
  });
}

displayProductsOnHome(productList);

// Filter products from mobile menu 
function filterProductsOnMobile() {
  navbarLinksMobile.forEach((navbarLinkMobile) => {
    if (navbarLinkMobile.textContent.toLowerCase() === "all" || !navbarLinkMobile.textContent) {
      navbarLinkMobile.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the page from reloading when clicking on the links
        productContainer.innerHTML = ""; // Remove other products in the home to show only filtered products
        displayProductsOnHome(productList);
        mobileMenu.classList.remove("active");
        addScrollingToBody();
      });
    } else {
      navbarLinkMobile.addEventListener("click", (event) => {
        event.preventDefault();
  
        // Filter products by category
        const filteredProducts = productList.filter((product) => product.category === navbarLinkMobile.textContent.toLowerCase());
  
        productContainer.innerHTML = "";
        displayProductsOnHome(filteredProducts);
        mobileMenu.classList.remove("active");
        addScrollingToBody();
      });
    }
  });
}

filterProductsOnMobile();

// Filter products from navbar menu on desktop
const mediaQuery = window.matchMedia("(min-width: 1200px)");

// Add necessary event listeners
function setupEventListeners() {
  navbarLinks.forEach((navbarLink) => {
    if (navbarLink.textContent.toLowerCase() === "all") {
      navbarLink.addEventListener("click", handleAllClick);
    } else {
      navbarLink.addEventListener("click", handleCategoryClick);
    }
  });
}

// Remove event listeners to avoid duplication
function removeEventListeners() {
  navbarLinks.forEach((navbarLink) => {
    navbarLink.removeEventListener("click", handleAllClick);
    navbarLink.removeEventListener("click", handleCategoryClick);
  });
}

// Show all products
function handleAllClick(event) {
  event.preventDefault();
  productContainer.innerHTML = "";
  displayProductsOnHome(productList);
  desktopMenu.classList.remove("active");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
}

// Filter products by category
function handleCategoryClick(event) {
  event.preventDefault();
  const navbarLink = event.currentTarget; // Reference to the element that has the listener
  const filteredProducts = productList.filter((product) => product.category === navbarLink.textContent.toLowerCase());
  productContainer.innerHTML = "";
  displayProductsOnHome(filteredProducts);
  desktopMenu.classList.remove("active");
  navbarIconExpand.classList.remove("navbar__icon-expand--inverted");
}

// Configure or remove event listeners depending on wether the media query matches or not
function handleMediaQueryChange(event) {
  if (event.matches) {
    setupEventListeners();
  } else {
    removeEventListeners();
  }
}

// Initial setup based on the current media query status
if (mediaQuery.matches) {
  setupEventListeners();
}

// Ensure that event listeners are updated when the state of the media query changes
mediaQuery.addEventListener("change", handleMediaQueryChange);