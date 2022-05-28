// noUISlider
const filterPriceElement = document.getElementById("filter-price-range");
const filterPriceTextElement = document.querySelector(
  ".catalog__filter-price-text"
);

noUiSlider.create(filterPriceElement, {
  start: [45, 2000],
  step: 1,
  connect: true,
  range: {
    min: 45,
    max: 2000,
  },
});
// Смена значения при движение ползунка
filterPriceElement.noUiSlider.on("update", function (values) {
  filterPriceTextElement.textContent = `Цена: ${values[0]} ₽ - ${values[1]} ₽`;
});

//////////////
// Открытие фильтра при адаптиве
const filterBtnOpen = document.querySelector(".catalog__filter-btn-open");
const filterGroups = document.querySelector(".catalog__filter-groups");

filterBtnOpen.addEventListener("click", function (e) {
  if (filterGroups.classList.contains("catalog__filter-groups--visible")) {
    filterGroups.style.height = 0;
    filterGroups.style.opacity = 0;

    filterGroups.classList.remove("catalog__filter-groups--visible");
  } else {
    filterGroups.style.height = filterGroups.scrollHeight + 3 + "px";
    filterGroups.style.opacity = 1;

    filterGroups.classList.add("catalog__filter-groups--visible");
  }
});
