$(function () {

  let sliderItem           = document.querySelectorAll('.slider__item'),
      menuLink             = document.querySelectorAll('.menu__link'),
      burger               = document.querySelector('.burger'),
      arrowAside           = document.querySelector('.arrow-aside');



  //aside

  arrowAside.addEventListener('click', function () {
    let parentsAside = this.closest('.aside');
    parentsAside.classList.toggle('active');
  });

  // burger 

  burger.addEventListener('click', function () {
    let parentsMenu = this.closest('.menu');
    parentsMenu.classList.toggle('active');
  });

  // navigation 

  menuLink.forEach(function (item) {
    item.addEventListener('click', function(){

      event.preventDefault();

      sliderItem.forEach(function (item) {
        item.classList.remove('active');
      })
  
      menuLink.forEach(function (item) {
        item.classList.remove('active');
      });
  
      menuItem = this.getAttribute('href');
      let domMenuItem = document.querySelector(menuItem);
      domMenuItem.classList.add('active');
  
      this.classList.add('active');
      this.closest('.menu').classList.remove('active');
    })
  })

});