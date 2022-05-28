new Swiper(".product__images-slider", {
  // Ветикальный слайдер
  direction: "vertical",
  // Кол-во слайдов для показа
  slidesPerView: 2,
  // Отступы между слайдами
  spaceBetween: 20,
  // Классы кнопок для передвижения
  navigation: {
    nextEl: ".product__images-slider-button--next",
    prevEl: ".product__images-slider-button--prev",
  },
  // Перетаскивание
  simulateTouch: true,

  // Адаптив
  // НА 450 PX слайдер становиться горизонтальным
  breakpoints: {
    1: {
      direction: "horizontal",
      slidesPerView: 2,
    },

    450: {
      direction: "vertical",
      slidesPerView: 2,
    },
  },
});
