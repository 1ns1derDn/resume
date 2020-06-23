$(function(){

  let header = $('.header');
  let screen = $('.screen');
  let menu = $('.menu');
  let screenSocialLink = $('.screen__social-link')
  let screenH = screen.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(screenH, scrollPos);

  $(window).on("scroll resize", function(){
    screenH = screen.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(screenH, scrollPos);
    menu.removeClass('wow fadeInLeft fadeInRight')
    menu.css('visibility', 'visible')
    screenSocialLink.removeClass('wow fadeInLeft fadeInRight')
    screenSocialLink.css('visibility', 'visible')
  });

  function checkScroll(screenH , scrollPos){
    if( scrollPos > screenH){
      header.addClass('fixed')
      menu.addClass('fixed')

    } else {
      header.removeClass('fixed')
      menu.removeClass('fixed')
    }
  }

  $("[data-scroll]").on('click', function(event){
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elemestOffset = $(elementId).offset().top;
    $('html, body').animate({
      scrollTop: elemestOffset - 50
    }, 700);
    $('.nav').removeClass('active');
    $('.menu').removeClass('active');
    $('body').removeClass('active');
    $('.burger__menu').removeClass('active');
  });

  $('input, select').styler();
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  new WOW({
    mobile: false
  }).init();

  $('.burger__menu').on('click', function(){
      $('.nav').toggleClass('active');
      $('.menu').toggleClass('active');
      $('body').toggleClass('active');
      $('.burger__menu').toggleClass('active');
  });

  $('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
  });

    $('.gallery__inner').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.find('img');
        }
      }
    });

});