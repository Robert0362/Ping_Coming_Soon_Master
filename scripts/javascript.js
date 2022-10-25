'use strict'
const btnNotify = document.getElementById('notify');
const email = document.getElementById('email');
const emailError = document.getElementById('errorMsg');




function validateEmail(inputText){
    let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailFormat)){
        email.value = '';
        return true;
        
	  }else {
        emailError.innerHTML = 'Looks like this is not an email';
        email.value = '';
        email.style.border = '1px solid red'
        email.innerHTML = '' 
        return false;
       
      }
}

btnNotify.addEventListener('click', function(){
    let passEmail = email.value;
    console.log(passEmail);
    validateEmail(passEmail);
  })