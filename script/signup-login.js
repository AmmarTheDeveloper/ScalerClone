const signupBtns = document.querySelectorAll('.signup-btn'),
  loginBtns = document.querySelectorAll('.login-btn'),
  loginSignupContainer = document.querySelector('.login-signup-container'),
  formContainer = document.querySelectorAll('.login-signup-container .container'),
  loginContainer = document.querySelector('.login-signup-container .login'),
  signupContainer = document.querySelector('.login-signup-container .signup'),
  signupForm = document.querySelector('.login-signup-container .signup form'),
  close = document.querySelectorAll('.login-signup-container .close i'),
  emailBtn = document.querySelector('.email-btn'),
  phoneBtn = document.querySelector('.phone-btn'),
  emailForm = document.querySelector('.email-container'),
  phoneForm = document.querySelector('.phone-container');

(function () {
  let today = new Date();
  let limit = 50;
  let graduation_input = document.getElementById('graduation');
  graduation_input.max = Number.parseInt(today.getFullYear());
  graduation_input.min = Number.parseInt(today.getFullYear()) - limit;
})();
function hideContainer() {
  formContainer.forEach(container => {
    container.classList.remove('active');
  })
}

signupBtns.forEach(btn => {
  btn.onclick = () => {
    loginSignupContainer.classList.add('active');
    hideContainer();
    signupContainer.classList.add('active');
  }
})

loginBtns.forEach(btn => {
  btn.onclick = () => {
    loginSignupContainer.classList.add('active');
    hideContainer();
    loginContainer.classList.add('active');
  }
})

close.forEach(btn => {
  btn.onclick = () => {
    hideContainer();
    loginSignupContainer.classList.remove('active');
  }
})

emailBtn.onclick = () => {
  emailForm.classList.add('active');
  phoneForm.classList.remove('active');
  emailBtn.classList.remove('active');
  phoneBtn.classList.add('active');
}

phoneBtn.onclick = () => {
  phoneForm.classList.add('active');
  emailForm.classList.remove('active');
  phoneBtn.classList.remove('active');
  emailBtn.classList.add('active');
}

//set error for invalid input
function setError(element, message) {
  let input = document.querySelector(`${element}`),
    error = input.nextElementSibling;
  error.innerHTML = message;
}

// signup form validation starts here
signupForm.onsubmit = (e) => {
  e.preventDefault();

  const email = signupForm.querySelector('#email-input').value.trim(),
    phone = signupForm.querySelector('#phone-input').value.trim(),
    validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let validEmail = false,
    validPhone = false;
  // email validation
  if (!email.match(validRegex)) {
    setError(`#email-input`, 'Enter valid email.(eg: example@gmail.com)');
    validEmail = false;
  } else {
    setError(`#email-input`, '');
    validEmail = true;
  }

  // phone validation 

  let start = phone.slice(0, 1);

  if (start == 0 || phone.length < 10 || phone.length > 10) {
    setError('#phone-input', 'Enter a valid phone number. Do not incluce leading 0 or country code');
    validPhone = false;
  } else if (start != 0 && phone.length == 10) {
    setError('#phone-input', '');
    validPhone = true;
  }

  if (validEmail && validPhone) {
    signupForm.submit();
  }
  console.log(validEmail)

}
// login validation starts here 
// phone validation 
phoneForm.onsubmit = (e) => {
  e.preventDefault();

  const phone = phoneForm.querySelector('#phone-field').value.trim();

  let validPhone = false;

  let start = phone.slice(0, 1);

  if (start == 0 || phone.length < 10 || phone.length > 10) {
    setError('#phone-field', 'Enter a valid phone number. Do not incluce leading 0 or country code');
    validPhone = false;
  } else if (start != 0 && phone.length == 10) {
    setError('#phone-field', '');
    validPhone = true;
  }

  if (validPhone) {
    phoneForm.submit();
  }

}
//email & password validation
emailForm.onsubmit = (e) => {
  e.preventDefault();
  const email = emailForm.querySelector('#email').value.trim(),
    password = emailForm.querySelector('#password').value.trim();

  let validemail = false,
    validPassword = false;
    let error = emailForm.querySelector('#password').nextElementSibling;
    error.innerHTML = 'Email address or password is incorrect.';

  if (validemail && validPassword) {
    emailForm.submit();
  }
}
