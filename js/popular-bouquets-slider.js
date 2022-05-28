new Swiper(".popular-bouquets__slider-main-container", {
  // Слайдов к показу
  slidesPerView: 3,

  // Отступы
  spaceBetween: 30,
  // simulateTouch: false,

  // Кнопки слайдов
  navigation: {
    nextEl: ".popular-bouquets__slider-btn--next",
    prevEl: ".popular-bouquets__slider-btn--prev",
  },

  // Дабы при нажатие на кнопку 'В корзину' слайдер не перетаскивался к этому слайду
  // Это происходило из-за всплытия события
  watchSlidesProgress: true,

  // Адаптив
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    520: {
      spaceBetween: 30,

      slidesPerView: 2,
    },
    825: {
      slidesPerView: 3,
    },
  },
});
