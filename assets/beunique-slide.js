document.addEventListener("DOMContentLoaded", function() {
  var slidesPerView = {{ section.settings.slides_per_view }};
  var sliderWidth = {{ section.settings.slider_width }};
  var autoplay = {{ section.settings.autoplay }};
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
  document.querySelector('.swiper-container').style.width = sliderWidth + 'vw';
});
