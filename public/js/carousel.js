new Swiper(swiperContainer, parameters);

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
  },


});

swiper.slideNext();
swiper.autoplay.start()
