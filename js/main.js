// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function($){
  'use strict';

  
  // Animsition
  $(".animsition").animsition();
  
  // Scrollax
  $.Scrollax();

  // Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);

    return false;
  });

  // Owl
  $('.wide-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

  // Show menu 
  if ($(window).width() > 768 ) {
    $('body').removeClass('menu-open');
    $('.js-templateux-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function(){
    var $this = $(this);
    $('.js-templateux-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768 ) {
      $('body').removeClass('menu-open');
      $('.js-templateux-menu').css('display', 'block');
      
    } else {
      if ($this.width() < 768 ) {
        $('.js-templateux-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button 
  $('.js-toggle-menu').on('click', function(e){
  	e.preventDefault();
  	
    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');  
      $('.js-templateux-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');  

      $('.js-templateux-menu li').each(function(k){
        var $this = $(this);
        setTimeout(function(){
          $this.addClass('staggard');
        }, 100 * k );
      });

    }

  	if ( $('.templateux-menu').is(':visible') ) {
  		$('.js-templateux-menu').fadeOut(300);
  	} else {
  		$('.js-templateux-menu').fadeIn(300);
  	}
  })
});

// Массив с путями к изображениям
var images = ['images/home-bg-slider-img1.jpg', 'images/home-bg-slider-img2.jpg'];

var currentIndex = 0;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

function changeImage() {
  // Показываем следующее изображение
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Устанавливаем следующее изображение
  image2.src = images[currentIndex];

  // Анимация - растворение одного изображения в другом
  image1.classList.remove('show');
  image2.classList.add('show');

  // Через некоторое время восстанавливаем начальную анимацию
    setTimeout(function() {
     image1.classList.add('show');
     image2.classList.remove('show');
   }, 4300);

}

// Вызываем функцию changeImage каждые 5 сек
setInterval(changeImage, 5000);