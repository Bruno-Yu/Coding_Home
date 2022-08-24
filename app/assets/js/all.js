$(function () {
  console.log("Hello Bootstrap5");
  // var swiperTestimonial = new Swiper(".swiper--testimonial", {
  //   navigation: {
  //     nextEl: ".function__next",
  //     prevEl: ".function__prev",
  //   },
  //   pagination: {
  //     el: ".function__pagination",
  //   },
  // });
  const reviewsSwiper = new Swiper(".reviews__swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".function__next",
      prevEl: ".function__prev",
    },
    pagination: {
      el: ".function__pagination",
    },
  });
  const date = document.querySelector("#date");
  const datepicker = new Datepicker(date, {
    language: "zh-TW",
  });

});
