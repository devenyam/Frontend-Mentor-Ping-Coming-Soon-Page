'use strict';

const button = document.querySelector('.input-btn');
const errorMessage = document.querySelector('.error-message');
const inputEmail = document.querySelector('.email');

console.log(inputEmail.value);

button.addEventListener('click', () => {
  if (!inputEmail.value.includes('@gmail.com')) {
    errorMessage.classList.remove('hide');
    inputEmail.classList.add('error');
    inputEmail.style.borderColor = 'hsl(354, 100%, 66%)';
    setTimeout(() => {
      errorMessage.classList.add('hide');
      inputEmail.style.borderColor = 'hsl(223, 100%, 88%)';
    }, 3000);
  }
});
