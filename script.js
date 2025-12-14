document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  // Відкрити
  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Блок скролу
  });

  // Закрити
  closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = ""; // Розблок скролу
  });
  //2
  function makeSliderWork(sectionClass) {
    const section = document.querySelector(sectionClass);

    if (!section) return;

    const container = section.querySelector(".swiper-wrapper");
    const btnLeft = section.querySelector(".previous-btn");
    const btnRight = section.querySelector(".next-btn");
    btnRight.addEventListener("click", function () {
      const card = container.querySelector("div");
      const cardWidth = card.offsetWidth;
      const gap = 20;
      container.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      });
    });
    btnLeft.addEventListener("click", function () {
      const card = container.querySelector("div");
      const cardWidth = card.offsetWidth;
      const gap = 20;

      container.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    });
  }
  makeSliderWork(".coaches");
  makeSliderWork(".reviews");
  // 3
  const details = document.querySelectorAll("details.faq-item");

  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Закриваємо всі інші details
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });
});
