const swiper = new Swiper('.news-swipe', {
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      1024: {
          slidesPerView: 3,
          spaceBetween: 100,
      },
  },
});


  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
});

  