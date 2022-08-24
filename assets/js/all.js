"use strict";

$(function () {
  console.log("Hello Bootstrap5"); // var swiperTestimonial = new Swiper(".swiper--testimonial", {
  //   navigation: {
  //     nextEl: ".function__next",
  //     prevEl: ".function__prev",
  //   },
  //   pagination: {
  //     el: ".function__pagination",
  //   },
  // });

  var reviewsSwiper = new Swiper(".reviews__swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".function__next",
      prevEl: ".function__prev"
    },
    pagination: {
      el: ".function__pagination"
    }
  });
  var date = document.querySelector("#date");
  var datepicker = new Datepicker(date, {
    language: "zh-TW"
  });
});
//# sourceMappingURL=all.js.map
