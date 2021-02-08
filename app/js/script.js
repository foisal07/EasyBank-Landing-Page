const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function (){
  console.log('open hamburger');

  if (header.classList.contains('open', 'overlay')){//Close hamburger menu
    header.classList.remove('open');
    header.classList.remove('overlay');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
  else{//Open hamburger menu
    header.classList.add('open');
    header.classList.add('overlay');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
});


