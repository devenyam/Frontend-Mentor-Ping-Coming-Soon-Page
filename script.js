'use strict';

const button = document.querySelector('.input-btn');
const errorMessage = document.querySelector('.error-message');
const inputEmail = document.querySelector('.email');

button.addEventListener('click', () => {
  if (!inputEmail.value.includes('@gmail.com')) {
    errorMessage.classList.remove('hide');
    inputEmail.classList.add('error');
    inputEmail.style.borderColor = 'hsl(354, 100%, 66%)';
    errorMessage.textContent = 'Please provide a valid email address';
    errorMessage.style.color = 'hsl(354, 100%, 66%)';
    setTimeout(() => {
      errorMessage.classList.add('hide');
      inputEmail.style.borderColor = 'hsl(223, 100%, 88%)';
    }, 5000);
  } else {
    errorMessage.classList.remove('hide');
    errorMessage.textContent = 'We will notify you';
    errorMessage.style.color = 'hsl(223, 87%, 63%)';
    setTimeout(() => {
      errorMessage.classList.add('hide');
    }, 5000);
  }
});
