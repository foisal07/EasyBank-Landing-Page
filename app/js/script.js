const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobile__menu = document.querySelector('.mobile__menu');

btnHamburger.addEventListener('click', function (){
  console.log('open hamburger');

  if (header.classList.contains('open', 'overlay')){//Close hamburger menu
    header.classList.remove('open');
    header.classList.remove('overlay');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    mobile__menu.classList.remove('fade-in');
    mobile__menu.classList.add('fade-out');
  }
  else{//Open hamburger menu
    header.classList.add('open');
    header.classList.add('overlay');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    mobile__menu.classList.add('fade-in')
    mobile__menu.classList.remove('fade-out');
  }
});


