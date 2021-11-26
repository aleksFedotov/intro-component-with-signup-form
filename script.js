const submitBtn = document.querySelector('.submit-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const inputs = document.querySelectorAll('.input');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validInput(input) {
  return input.trim() !== '';
}

function getErrorMsg(name) {
  return name.parentElement.querySelector('.error-msg');
}

function errorMsgContent(name) {
  return `${name} cannot be emty`;
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach((input) => input.parentElement.classList.remove('error'));

  if (!validInput(firstName.value)) {
    const errorMsg = getErrorMsg(firstName);
    errorMsg.innerText = errorMsgContent(firstName.name);

    firstName.parentElement.classList.add('error');
  }

  if (!validInput(lastName.value)) {
    const errorMsg = getErrorMsg(lastName);
    errorMsg.innerText = errorMsgContent(lastName.name);

    lastName.parentElement.classList.add('error');
  }

  if (!validInput(password.value)) {
    const errorMsg = getErrorMsg(password);
    errorMsg.innerText = errorMsgContent(password.name);

    password.parentElement.classList.add('error');
  }

  if (!validInput(email.value) || !validateEmail(email.value)) {
    const errorMsg = getErrorMsg(email);
    errorMsg.innerText = 'Looks like this is not an email';

    email.parentElement.classList.add('error');
  }
});
