// import Swiper JS
const swiper = new Swiper(".articles-slider", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});