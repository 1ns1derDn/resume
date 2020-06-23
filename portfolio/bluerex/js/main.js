$(function(){
  
  let header = $('#header'),
    intro = $('#intro'),
    introH = intro.innerHeight() - 200,
    scroll = $(window).scrollTop(),
    menuBtn = $('#menu__btn');
    let check = (introH, scroll) => {
      if(scroll > introH){
        $(header).addClass('fixed');
      } else {
        $(header).removeClass('fixed');
      }
    }

    check(introH, scroll)
    $(window).on('scroll', function(){
      scroll = $(window).scrollTop();
      introH = intro.innerHeight() -200,
      check(introH, scroll);
    });

    $(menuBtn).on('click', function(){
      $(this).toggleClass('active');
      let parentMenu = $(this).parent('.menu');
      parentMenu.find('.menu__list').toggleClass('active');
      $(this).parents('body, html').toggleClass('no--scroll');
    });

    $('[data-scroll]').on('click', function(){
      let $this = $(this);
      let elementId = $this.data('scroll');
      let elementSrolll = $(elementId).offset().top - 80;
      $('body, html').animate({
        scrollTop: elementSrolll
      }, 700);
      $(this).parents('body, html').removeClass('no--scroll');
      $(menuBtn).removeClass('active');
      $('.menu__list').removeClass('active');
    });

  $('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

    $(".testimonials__stars").rateYo({
      rating: 5,
      starWidth: "22px",
      spacing: "5px",
      readOnly: true
    });

    wow = new WOW(
      {
      mobile: false
    }
    )
    wow.init();

    let player =  videojs ( '#my-video' );
    let mixer = mixitup('#wordMixitup');
    
});