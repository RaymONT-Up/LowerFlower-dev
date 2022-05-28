const accordionsContainer = document.querySelector(".faq__accordions");

accordionsContainer.addEventListener("click", e => {
  const button = e.target.closest(".faq__accordion-button");

  if (!button) return;
  const accordion = button.closest(".faq__accordion");
  const paragraph = button.nextElementSibling;

  button.closest(".faq__accordion").classList.toggle("faq__accordion--open");

  if (accordion.classList.contains("faq__accordion--open"))
    paragraph.style.height = paragraph.scrollHeight + 3 + "px";
  else paragraph.style.height = 0 + "px";
});
