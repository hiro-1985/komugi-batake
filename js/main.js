

// スクロールすると要素をふわっと表示↓
$(function () {
  $(".js-fade").on("inview", function () {
    $(this).addClass("fade-active");
  });
});

// スライダー↓
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    reverseDirection: false
},
effect: "fade"

});