"use strict";

$(function () {
  console.log("Hello Bootstrap5");
  var date = document.querySelector('#date');
  var datepicker = new Datepicker(date, {
    language: 'zh-TW'
  });
  var swiper = new Swiper(".reviews__swiper", {
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
});
//# sourceMappingURL=all.js.map
