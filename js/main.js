///////////////////////
// Header
const headerBtnBurger = document.querySelector(".header__burger");
const headerBtnBasket = document.querySelector(".header__basket-btn");
const headerBtnBasketClose = document.querySelector(
  ".header__basket-btn-close"
);
const headerNav = document.querySelector(".header__nav");
const headerBasket = document.querySelector(".header__basket-container");
// Header burger menu
headerBtnBurger.addEventListener("click", e => {
  headerBtnBurger.classList.toggle("header__burger--active");
  headerNav.classList.toggle("header__nav--active");

  headerBasket.classList.remove("header__basket-container--active");
});
// Basket menu
headerBtnBasket.addEventListener("click", e => {
  headerBasket.classList.toggle("header__basket-container--active");

  headerNav.classList.remove("header__nav--active");
  headerBtnBurger.classList.remove("header__burger--active");
});
headerBtnBasketClose.addEventListener("click", e => {
  headerBasket.classList.remove("header__basket-container--active");
});
