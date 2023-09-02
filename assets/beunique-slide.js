document.addEventListener("DOMContentLoaded", function() {
  var swiperContainer = document.querySelector('.swiper-container');
  var slidesPerView = parseInt(swiperContainer.dataset.slidesPerView);
  var sliderWidth = parseInt(swiperContainer.dataset.sliderWidth);
  var autoplay = swiperContainer.dataset.autoplay === 'true';
  var autoplaySpeed = parseInt(swiperContainer.dataset.autoplaySpeed);

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: slidesPerView,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    effect: 'slide',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: autoplay ? {
      delay: autoplaySpeed,
      disableOnInteraction: false,
    } : false,
    pauseOnMouseEnter: true,
    zoom: {
      maxRatio: 1.5,
    },
  });

  swiperContainer.style.width = sliderWidth + 'px';
});
