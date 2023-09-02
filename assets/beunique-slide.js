class SwiperSlider extends HTMLElement {
  constructor() {
    super();
    this.slidesPerView = this.getAttribute('data-slides-per-view');
    this.sliderWidth = this.getAttribute('data-slider-width');
    this.autoplay = this.getAttribute('data-autoplay') === 'true';
    this.initSwiper();
  }

  initSwiper() {
    const mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 1,
      slidesPerView: this.slidesPerView,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: this.autoplay ? {
        delay: 5000,
        disableOnInteraction: true,
      } : false,
    });
    document.querySelector('.swiper-container').style.width = this.sliderWidth + 'vw';
  }
}

customElements.define('swiper-slider', SwiperSlider);

document.addEventListener("DOMContentLoaded", function() {
  const swiperContainer = document.querySelector('.swiper-container');
  const swiperSlider = document.createElement('swiper-slider');
  swiperSlider.setAttribute('data-slides-per-view', swiperContainer.dataset.slidesPerView);
  swiperSlider.setAttribute('data-slider-width', swiperContainer.dataset.sliderWidth);
  swiperSlider.setAttribute('data-autoplay', swiperContainer.dataset.autoplay);
  document.body.appendChild(swiperSlider);
});
