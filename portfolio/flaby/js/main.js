$(function () {

  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  
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
    $('.overlaid').removeClass('active');
    $('body').removeClass('active');
    $('html').removeClass('active');
    $('.header__btn').removeClass('active');
    $('.burger').removeClass('active');
  });

  function checkScroll(introH , scrollPos){
    if( scrollPos > introH){
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  $('.slider__inner').slick({
    infinite: false,
    appendArrows: $('.slider__arrows')
  });
  $('.burger').on('click', function () {
    $('.overlaid').toggleClass('active');
    $('body').toggleClass('active');
    $('html').toggleClass('active');
    $('.header__btn').toggleClass('active');
    $(this).toggleClass('active');
  });

  wow = new WOW({
      mobile: false
    })
    wow.init();
});