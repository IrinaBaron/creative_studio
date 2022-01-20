

let elems = document.querySelectorAll('.team__item');
let names = document.querySelectorAll('.team__wrap');

elems.forEach(elem => {
  elem.addEventListener('click', (e) => {
    elem.classList.toggle('active');

  })
})

document.addEventListener('click', (e) => {
  // console.log(e.target)
  if(!e.target.matches('.team__img')) {
    elems.forEach( elem => {
      elem.classList.remove('active');
    })
  }

  if(e.target.closest('.team__name')) {
    let parent = e.target.parentElement;
    parent.parentElement.classList.toggle('active')
  }

  if(!e.target.closest('.contacts')) {
    document.querySelector('.contacts__more').classList.remove('show')
  }
  
})

document.addEventListener('dblclick', (e) => {
  if(e.target.closest('.contacts__list')) {
    document.querySelector('.contacts__more').classList.remove('show')
  }
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

document.querySelector('.contacts__btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.contacts__more').classList.toggle('show')
})


