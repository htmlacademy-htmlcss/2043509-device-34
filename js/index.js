const servicesButtons = document.querySelectorAll('.services-button');
const servicesItems = document.querySelectorAll('.services-description-item');

servicesButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.services-button.is-active').classList.remove('is-active');
    document.querySelector('.services-description-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    servicesItems[index].classList.add('is-active');
  });
})

const paginationButtons = document.querySelectorAll('.pagination-button');
const sliderItems = document.querySelectorAll('.slider-item');

const sliderButtonNext = document.querySelector('.slider-button-next');
const sliderButtonPrev = document.querySelector('.slider-button-prev');

let index = 0;

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.pagination-button.is-active').classList.remove('is-active');
    document.querySelector('.slider-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderItems[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  paginationButtons[index].classList.remove('is-active');
  sliderItems[index].classList.remove('is-active');
  if (index === paginationButtons.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  paginationButtons[index].classList.add('is-active');
  sliderItems[index].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  paginationButtons[index].classList.remove('is-active');
  sliderItems[index].classList.remove('is-active');
  if (!index) {
    index = paginationButtons.length - 1;
  } else {
    index = index - 1;
  }
  paginationButtons[index].classList.add('is-active');
  sliderItems[index].classList.add('is-active');
});
