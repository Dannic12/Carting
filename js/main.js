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

const blog__info = document.querySelector('.blog__info')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')

function openModalAndBlockScroll() {
  blog__info.showModal()
  document.body.classList.add('scroll-block')
}

function returnScroll() {
  document.body.classList.remove('scroll-block')
}

function close() {
  blog__info.close()
  returnScroll()
}

openModal.addEventListener('click', openModalAndBlockScroll)
closeModal.addEventListener('click', () => {})