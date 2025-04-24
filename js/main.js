const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



$(function(){
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

});