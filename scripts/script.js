$(document).ready(function() {
  $('#trigger-1').click(function() {
    $('#target-1').toggleClass('active');
  })
});

/*=======================*
 *  Menu
 *=======================*/

$('.burger-icon').click(function() {
  $(this).toggleClass('active');
  $('nav').toggleClass('active');

  document.documentElement.style.setProperty('--burger-color', 
    getComputedStyle(document.documentElement).getPropertyValue('--burger-color') === '#564D8C' ? '#A0D9D9' : '#564D8C'
  );
});

/*=======================*
 *  Swiper Slider
 *=======================*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});