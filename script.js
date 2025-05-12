const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
  
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
  
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});