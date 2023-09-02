document.addEventListener("DOMContentLoaded", function() {
  var swiperContainer = document.querySelector('.swiper-container');
  var slidesPerView = parseInt(swiperContainer.dataset.slidesPerView);
  var sliderWidth = parseInt(swiperContainer.dataset.sliderWidth);
  var autoplay = swiperContainer.dataset.autoplay === 'true';

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: slidesPerView,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: autoplay ? {
      delay: 5000,
      disableOnInteraction: true,
    } : false,
  });

  swiperContainer.style.width = sliderWidth + 'px';  // changed 'vw' to 'px'
});
