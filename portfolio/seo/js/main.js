$(function(){

  let menu__btn = $('.menu__btn');
  let menu__list = $('.menu__list');

  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  
  menu__btn.on('click', function(){
    menu__list.toggleClass('active');
    menu__btn.toggleClass('active');
  });

  checkScroll(introH, scrollPos);

  $(window).on("scroll resize", function(){
    introH = intro.innerHeight() - 80;
    scrollPos = $(this).scrollTop();
    checkScroll(introH, scrollPos);
  });

  $("[data-scroll]").on('click', function(event){
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elemestOffset = $(elementId).offset().top;
    console.log(elementId);
    $('html, body').animate({
      scrollTop: elemestOffset - 50
    }, 700);
    menu__list.removeClass('active');
    menu__btn.removeClass('active');
  });

  function checkScroll(introH , scrollPos){
    if( scrollPos > introH){
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }


  function checkScroll(introH , scrollPos){
    if( scrollPos > introH){
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  $('.slider').slick({
    infinite: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          dots: true,
          infinite: true,
          fade: true,
          autoplay: true,
          autoplaySpeed: 5000
        }
      }
    ]
  });

});