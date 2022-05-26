const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.faded');

const form = document.querySelector('#contact-form');
const name_ = document.getElementById('name');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');

const name_error = document.getElementById('name-error');
const telephone_error = document.getElementById('telephone-error');
const email_error = document.getElementById('email-error');
const submit_error = document.getElementById('submit-error');

btnMenu.addEventListener('click',function(){
    console.log('click menu');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElements.forEach(function(el){
            el.classList.remove('fade_in');
            el.classList.add('fade_out');
        });
    }
    else {
        header.classList.add('open');
        fadeElements.forEach(function(el){
            el.classList.remove('fade_out');
            el.classList.add('fade_in');
        });

    }
});

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  formData = {
    name: name_.value,
    email: email.value,
    telephone:telephone.value
  };

  let xhr = new XMLHttpRequest();
  xhr.open('POST','/');
  xhr.setRequestHeader('content-type','application/json');
  xhr.onload = function(){
      console.log(xhr.responseText);
      if(xhr.responseText == "success") {
        submit_error.innerHTML = 'Ми отримали ваші дані!';
        setTimeout(() =>{
            form.reset();
            submit_error.innerHTML = '';
        }, 3000);
      }
      else {
          alert('Something went wrong...');
      }
  }

  xhr.send(JSON.stringify(formData));

});

function validateName() {
    var name_v = document.getElementById('name').value;

    if(name_v.length==0){
        name_error.innerHTML = 'Обов\'язкове поле';
        return false;
    }
    name_error.innerHTML = ''
    return true;
}

function validatePhone() {
    var telephone_v = document.getElementById('telephone').value;
    if(telephone_v.length==0){
        telephone_error.innerHTML = 'Обов\'язкове поле';
        return false;
    }

    if(!telephone_v.match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)){
        telephone_error.innerHTML = 'Невірний телефон';
        return false;
    }
    telephone_error.innerHTML = ''
    return true;
}

function validateEmail() {
    var email_v = document.getElementById('email').value;
    if(email_v.length==0){
        email_error.innerHTML = 'Обов\'язкове поле';
        return false;
    }

    if(!email_v.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        email_error.innerHTML = 'Невірний email';
        return false;
    }
    email_error.innerHTML = ''
    return true;
}


function ValidateForm() {
    if(!validateName() || !validatePhone() || !validateEmail()){
        return false;
    }
};

function validPhone (telephone) {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(telephone);
};
