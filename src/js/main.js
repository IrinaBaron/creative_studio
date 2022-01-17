
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');

btnOne.addEventListener('click', (e) => {
  e.preventDefault();
  btnOne.classList.toggle('active');
  if(btnTwo.classList.contains('active')) {
    btnTwo.classList.remove('active');
  }
})

btnTwo.addEventListener('click', (e) => {
  e.preventDefault();
  btnTwo.classList.toggle('active');
  if(btnOne.classList.contains('active')) {
    btnOne.classList.remove('active');
  }
})




// // burger-menu 

// const burgerBtn = document.querySelector('.header__burger')

// burgerBtn.addEventListener('click', function () {
//   burgerBtn.classList.toggle('active');
//   document.querySelector('.header__nav').classList.toggle('active');
//   document.querySelector('.contacts__phone').classList.toggle('active')
//   // document.querySelector('body').classList.toggle('lock');
// })

