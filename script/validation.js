let form1 = document.querySelector('#home .form form'),
    nameInput = document.querySelector('.name-input'),
    emailInput = document.querySelector('.email-input'),
    phoneInput = document.querySelector('.phone-input'),
    graduationInput = document.querySelector('.graduation-input'),
    collegeInput = document.querySelector('.college-input'),
    companyInput = document.querySelector('.company-input'),
    jobInput = document.querySelector('.job-input'),
    hidden = form1.querySelector('.input-container .hidden'),
    submitBtn = form1.querySelector('.live-class button[type=submit]');
    // const allInputs = document.querySelectorAll('#home form .input-container input:not(#phone)');

function validation(){
    let validName = false,
    validEmail = false,
    validPhone = false,
    validGraduation = false,
    validCollege = false,
    validCompany = false,
    validJob = false;

    // code for disabled or enable submit btn 
    function checkSubmit(){
        if(validName && validEmail && validPhone && validGraduation && validCollege && validCompany && validJob ){
            submitBtn.disabled = false;
        }else{
            submitBtn.disabled = true;
        }
    }
    // name validation 
nameInput.oninput = ()=>{
    nameInput.classList.add('valid');
    let error = nameInput.parentElement.nextElementSibling;

    if(nameInput.value.trim().length == 0){
        error.innerHTML = 'This field is required';
        validName = false;

    }else if(nameInput.value.trim().length > 0){
        error.innerHTML = '';
        validName = true;
    }
    checkSubmit();
};

// email validation 

emailInput.oninput = ()=>{
    emailInput.classList.add('valid');
    let error = emailInput.parentElement.nextElementSibling;
    let validRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(emailInput.value.trim().length == 0){
    error.innerHTML = 'This field is  required';
    validEmail = false;
}else if(!emailInput.value.match(validRegEx)){
        error.innerHTML = 'Enter a valid email.(eg:example@gmail.com) ';
        validEmail = false;
    }else if(emailInput.value.match(validRegEx)){
        error.innerHTML = '';
        validEmail = true;
}
checkSubmit();
}
// phone number validation
phoneInput.onfocus = ()=>{
    hidden.classList.add('active');
}
phoneInput.oninput = ()=>{
    phoneInput.classList.add('valid');
    let start = phoneInput.value.trim().slice(0 , 1);
    let error = phoneInput.parentElement.nextElementSibling;

    if(phoneInput.value.trim().length == 0){
        error.innerHTML = 'This field is required';
        validPhone = false;
    }else if(start == 0 || phoneInput.value.trim().length < 10 || phoneInput.value.trim().length > 10){
        error.innerHTML = 'Enter a valid phone number. Do not include leading 0 or country code';
        validPhone = false;
    }else if(start != 0 && phoneInput.value.trim().length == 10){
        error.innerHTML = '';
        validPhone = true;
    }
    checkSubmit();  
}

// graduation validation 
graduationInput.oninput = ()=>{
    graduationInput.classList.add('valid');
    let error = graduationInput.parentElement.nextElementSibling;
    let today = new Date();
    let curr_year = today.getFullYear();
    let limit = 50;
    let min_year  = Number.parseInt(curr_year) - limit;
    if(graduationInput.value.trim().length == 0){
        error.innerHTML = 'This field is required';
        validGraduation = false;
    }else if(graduationInput.value.trim() < min_year || graduationInput.value.trim() > curr_year){
        error.innerHTML = 'Add correct grad year';
        validGraduation = false;
    }else{
        error.innerHTML = '';
        validGraduation = true;
    }
    checkSubmit();
}

// college validation
collegeInput.oninput = ()=>{
    collegeInput.classList.add('valid');
    let error = collegeInput.parentElement.nextElementSibling;
    if(collegeInput.value.trim().length == 0 || collegeInput.value.trim().match(/[0-9]/)){
        error.innerHTML = 'This field is required';
        validCollege = false;
    }else if(collegeInput.value.trim().length > 0){
        error.innerHTML = '';
        validCollege = true;
    }
    checkSubmit();
}

// company validation 
companyInput.oninput = ()=>{
    companyInput.classList.add('valid');
    let error = companyInput.parentElement.nextElementSibling;
    if(companyInput.value.trim().length == 0){
        error.innerHTML = 'This field is required';
        validCompany = false;
    }else if(companyInput.value.trim().length > 0){
        error.innerHTML = '';
        validCompany = true;
    }
    checkSubmit();
}

// job validation 
jobInput.oninput = ()=>{
    jobInput.classList.add('valid');
    let error = jobInput.parentElement.nextElementSibling;
    if(jobInput.value.trim().length == 0){
        error.innerHTML = 'This field is required';
        validJob = false;
    }else if(jobInput.value.trim().length > 0){
        error.innerHTML = '';
        validJob = true;
    }
    checkSubmit();
}
}
validation();