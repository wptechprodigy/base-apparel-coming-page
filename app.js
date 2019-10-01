const email = document.querySelector('#email');
const submit = document.querySelector('.cta__submit-btn');
const validationMessage = document.querySelector('.validation-message');
const warningSign = document.querySelector('.warning-sign');

// Email pattern to test against
ePattern = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Utility to validate email
function validateEmail(email) {
  // Is email provided at all?
  if (!email.value || email.value === '') return false;

  // Ok. Is an email provided? Remove possible white spaces
  // then check against pattern
  return ePattern.test(email.value.trim());
}

function checkToggleState(...field) {
  return field.map(eachField => {
    if (eachField.classList.toggle('invalid', true)) {
      eachField.classList.toggle('invalid');
    }
  });
}

// Logic to handle submission
submit.addEventListener('click', event => {
  // Prevent browser default behaviour
  event.preventDefault();
  // Check state of toggle
  checkToggleState(validationMessage, warningSign, submit);
  submit.classList.remove('ml');

  // Is email valid
  if (validateEmail(email) === false) {
    // set validate message display to block
    validationMessage.classList.toggle('invalid');
    // set warning sign display to block
    warningSign.classList.toggle('invalid');
    // Set an outline of soft-red on the input
    submit.classList.toggle('ml');
    // Return without submitting the form.
    alert ('Try again with a valid email!');
    return;
  }

  checkToggleState(validationMessage, warningSign, submit);

  submit.classList.remove('ml');
  // validationMessage

  return alert('Email submitted successfully!');
});
