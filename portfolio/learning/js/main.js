$(function () {

  let menu__btn = $('.menu__btn'),
    introSliderItem = $('.intro-slider__item'),
    introSliderItemH = introSliderItem.innerHeight() - 150,
    scroll = $(window).scrollTop(),
    header = $('.header');

  let checkSroll = (introSliderItemH, scroll) => {
    if (scroll >= introSliderItemH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  checkSroll(introSliderItemH, scroll);

  $(window).on('scroll', function () {
    scroll = $(window).scrollTop();
    checkSroll(introSliderItemH, scroll);
  });

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    let $this = $(this);
    let linkId = $this.data('scroll');
    let linkOffset = $(linkId).offset().top;
    $('body, html').animate({
      scrollTop: linkOffset - 110
    }, 700);
    let parents = $this.parents('.menu');
    parents.find('.menu__link').removeClass('active');
    $this.addClass('active');
    $('.menu__btn').removeClass('active');
    $('.menu__list').removeClass('active');
    $('body').removeClass('fixed');
  });

  console.log(scroll)
  $(menu__btn).on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');
    $('body').toggleClass('fixed');
  });

  $(window).scroll(function () {
    let windscroll = $(window).scrollTop();
    $('body [data-menuActive]').each(function (i) {
      if ($(this).position().top <= windscroll + 230) {
        $('.menu a.active').removeClass('active');
        $('.menu a').eq(i).addClass('active');
      }
    });
  }).scroll();

  $('.news__slider-inner').slick({
    slidesToShow: 2,
    dots: true,
    arrows: false,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $("[data-accordion]").on('click', function (event) {
    event.preventDefault();

    let $this = $(this),
      elementId = $this.data('accordion');
    $this.toggleClass('active');
    $(elementId).slideToggle();

  });

  $(".course__item-stars").rateYo({
    rating: 3.6,
    halfStar: true,
    starWidth: '18px',
    readOnly: true
  });

  $('.intro-slider').slick({
    arrows: true,
    fade: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
          fade: true
        }
      }
    ]
  });


  let mixer = mixitup('.gallery__inner');

});