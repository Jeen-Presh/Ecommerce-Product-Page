"use strict";

// Selecting Dom Elements
const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
const openICon = document.getElementById("open-icon");
const closeICon = document.getElementById("close-icon");
const cartButton = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");
const slideImages = document.querySelectorAll(".slide");
const anotherSLide = document.querySelectorAll(".slide-2");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const quantityInput = document.getElementById("quantity");
const plusButton = document.querySelector(".absolute.right-4");
const minusButton = document.querySelector(".absolute.left-4");
const nextBtnLightbox = document.querySelector("#next");
const prevBtnLightBox = document.querySelector("#prev");
const thumbnails = document.querySelectorAll(".thumbnails");
const defaultImage = document.getElementById("default-image");
const addToCartBtn = document.getElementById("Add-to-cart");
const cartMenu = document.querySelector(".cart__menu");
const currentPrice = document.querySelector(".current-price");
const cartText = document.querySelector(".cart__text");
const cardCount = document.querySelector(".card-count");
const lightBox = document.querySelector(".lightbox-gallery");
const lightBoxBtn = document.getElementById("lightbox-closebtn");

// Modal function opens and close the menu list and adds overlay
const modal = function () {
  openICon.classList.toggle("hidden");
  closeICon.classList.toggle("hidden");

  menuList.classList.toggle("menu-list");

  document.body.classList.toggle("no-scroll");
  document.body.classList.toggle("overlay");
};

// Event listener for the Menu toggle button
menuToggle.addEventListener("click", () => {
  menuList.classList.contains("menu-list") ? menuToggle.setAttribute("aria-expanded", false) : menuToggle.setAttribute("aria-expanded", true);

  modal();
});

// Event listener for the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (menuList.classList.contains("menu-list")) modal();
    if (!cart.classList.contains("-translate-y-96")) {
      cart.classList.toggle("-translate-y-96");
    }

    if (lightBox.classList.contains("md:grid")) closeLightBoxGallery();
  }

  if (e.key === "ArrowLeft") prevSlide();

  if (e.key === "ArrowRight") nextSlide();
});

// CartButton Eventlistener
cartButton.addEventListener("click", () => {
  cart.classList.contains("-translate-y-96") ? cartButton.setAttribute("aria-expanded", true) : cartButton.setAttribute("aria-expanded", false);
  cart.classList.toggle("-translate-y-96");
});

// SLides
let currentSlide = 0;

//Keeps the remainng slide by the sides
const goTOSLide = function (slide) {
  slideImages.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
};

// Lightbox slides
const diffSlide = function (slide) {
  anotherSLide.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
};

goTOSLide(0);
diffSlide(0);

// Next button for slides
const nextSlide = function () {
  if (currentSlide === slideImages.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goTOSLide(currentSlide);
};

// Previous Button for slides
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slideImages.length - 1;
  } else {
    currentSlide--;
  }

  goTOSLide(currentSlide);
};

// Next Button addeventlistener
nextButton.addEventListener("click", nextSlide);

// Previous Button addeventlistener
prevButton.addEventListener("click", prevSlide);

// Quantity increase button
plusButton.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Quantity Decrease Button
minusButton.addEventListener("click", () => {
  if (parseInt(quantityInput.value) > 0) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

// Lightbox counter
let lightBoxSLide = 0;

// Lightbox gallery nextslide function
const nextSlideLightBox = function () {
  if (lightBoxSLide === anotherSLide.length - 1) {
    lightBoxSLide = 0;
  } else {
    lightBoxSLide++;
  }

  diffSlide(lightBoxSLide);
};

// Lightbox gallery previous slide function
const prevSlideLightBox = function () {
  if (lightBoxSLide === 0) {
    lightBoxSLide = anotherSLide.length - 1;
  } else {
    lightBoxSLide--;
  }
  diffSlide(lightBoxSLide);
};

// Next Slide/Image for Lightbox Gallery
nextBtnLightbox.addEventListener("click", nextSlideLightBox);

// Previous Slide/image for Lightbox Gallery
prevBtnLightBox.addEventListener("click", prevSlideLightBox);

thumbnails.forEach((s, i) => {
  s.addEventListener("click", () => {
    let currentIndex = i;
    diffSlide(currentIndex);
  });
});

// Add to cart Btn event listener
addToCartBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (Number(quantityInput.value) === 0) return;
  cardCount.classList.replace("hidden", "inline-block");
  if (Number(quantityInput.value) <= 9) {
    cardCount.textContent = quantityInput.value;
  } else {
    cardCount.textContent = "9+";
  }

  cartText.classList.add("hidden");
  const li = document.createElement("li");
  cartMenu.appendChild(li);
  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");
  li.appendChild(productContainer);
  const img = document.createElement("img");

  img.src = "img/image-product-1.jpg";
  img.setAttribute("alt", "");
  img.classList.add("cart__img");
  productContainer.appendChild(img);
  const div = document.createElement("div");
  const productTitle = document.createElement("h3");
  productTitle.appendChild(document.createTextNode("Fall Limited Edition Sneakers"));
  productTitle.classList.add("cart__price");
  div.appendChild(productTitle);
  const paragraph = document.createElement("p");
  const costPrice = currentPrice.textContent;

  const quantity = quantityInput.value;
  const finalPrice = (Number(costPrice.slice(1)) * Number(quantity)).toFixed(2);
  paragraph.textContent = `${costPrice} x ${quantity} `;
  const span = document.createElement("span");
  span.textContent = `${finalPrice}`;
  span.classList.add("subtext");
  paragraph.appendChild(span);
  paragraph.classList.add("cart__price");
  div.appendChild(paragraph);
  div.classList.add("flex");
  div.classList.add("flex-col");
  productContainer.appendChild(div);
  li.appendChild(productContainer);
  const deletBtn = document.createElement("button");
  deletBtn.setAttribute("type", "button");
  const deleteSvg = document.createElement("img");
  deleteSvg.src = "img/icon-delete.svg";
  deleteSvg.setAttribute("alt", "");
  deletBtn.appendChild(deleteSvg);
  li.appendChild(deletBtn);
  li.classList.add("cart__lsit");
  const checkOutBtn = document.createElement("button");
  checkOutBtn.setAttribute("type", "button");
  checkOutBtn.textContent = "Checkout";
  checkOutBtn.classList.add("btn");
  checkOutBtn.classList.add("btn--primary");
  cartMenu.appendChild(checkOutBtn);

  // Delete Cart items button event listener
  const deleteItem = function () {
    li.remove();
    checkOutBtn.remove();
    cardCount.textContent = "";
    cardCount.classList.replace("inline-block", "hidden");
    cartText.classList.remove("hidden");
  };
  deletBtn.addEventListener("click", deleteItem);
});

// Open Lightbox Gallery
const openLightBoxGallery = function () {
  lightBox.classList.toggle("lg:grid");
  document.body.classList.toggle("no-scroll");
};

slideImages.forEach((s) => {
  s.addEventListener("click", openLightBoxGallery);
});

// Close Lighbox
const closeLightBoxGallery = function () {
  lightBox.classList.toggle("lg:grid");
  document.body.classList.toggle("no-scroll");
};

lightBoxBtn.addEventListener("click", closeLightBoxGallery);
