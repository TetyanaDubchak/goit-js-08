
const form = document.querySelector('.feedback-form');

const localStorageKey = "feedback-form-state";

form.elements.email.value = localStorage.getItem(localStorageKey.email) ?? '';
form.elements.message.value = localStorage.getItem(localStorageKey.message) ?? '';

form.addEventListener("input", (evt) => {
    const formValues = {
        email: evt.target,
        message: evt.target
    }
    console.dir(evt.target);
  localStorage.setItem(localStorageKey, formValues);
});