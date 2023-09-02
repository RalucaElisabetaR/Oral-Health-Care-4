document.addEventListener("DOMContentLoaded", function() {
  var swiperContainer = document.querySelector('.swiper-container');
  var slidesPerView = parseInt(swiperContainer.dataset.slidesPerView);
  var sliderWidth = parseInt(swiperContainer.dataset.sliderWidth);
  var autoplay = swiperContainer.dataset.autoplay === 'true';
  var autoplaySpeed = parseInt(swiperContainer.dataset.autoplaySpeed);
  var showNavigationButtons = swiperContainer.dataset.showNavigationButtons === 'true';

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: slidesPerView,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000, // Adjust this value to make the transition more linear
    navigation: showNavigationButtons ? {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    } : null,
    autoplay: autoplay ? {
      delay: autoplaySpeed,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    } : false,
  });

  swiperContainer.style.width = sliderWidth + 'px';
});
