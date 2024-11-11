import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

form.elements.email.value = savedData.email ?? '';
form.elements.message.value = savedData.message ?? '';

form.addEventListener("input", throttle(() => {
    const formValues = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }

  localStorage.setItem(localStorageKey, JSON.stringify(formValues));
},500));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.removeItem(localStorageKey);
  console.log('Email:', form.elements.email.value);
  console.log('Message:', form.elements.message.value);
  form.elements.email.value = '';
  form.elements.message.value = '';
});
