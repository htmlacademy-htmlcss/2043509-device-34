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

let slideIndex = 0;

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    slideIndex = index;
    document.querySelector('.pagination-button.is-active').classList.remove('is-active');
    document.querySelector('.slider-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderItems[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  paginationButtons[slideIndex].classList.remove('is-active');
  sliderItems[slideIndex].classList.remove('is-active');
  if (slideIndex === paginationButtons.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }
  paginationButtons[slideIndex].classList.add('is-active');
  sliderItems[slideIndex].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  paginationButtons[slideIndex].classList.remove('is-active');
  sliderItems[slideIndex].classList.remove('is-active');
  if (slideIndex != 0) {
    slideIndex = slideIndex - 1;
  } else {
    slideIndex = paginationButtons.length - 1;
  }
  paginationButtons[slideIndex].classList.add('is-active');
  sliderItems[slideIndex].classList.add('is-active');
  index === paginationButtons[index];
});


const deliveryLink = document.querySelector('.delivery-link');
const modalCloseButton = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

deliveryLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});

document.addEventListener('click', (evt) =>  {
  if ( evt.target === modal) {
   modal.classList.remove('is-open');
  }
});
