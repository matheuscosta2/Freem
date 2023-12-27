var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  // slidesPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grapCursor: "true",
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    //coloquei para ficar responsivo
    0: {
      slidesPerView: 1,
    },
    730: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
