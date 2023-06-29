const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    console.log('Submit button clicked');
    console.log('Event:', e); // Log the event object
    console.log('Form:', form); // Log the form element
    console.log('Username:', username.value.trim()); // Log the username value
    console.log('Email:', email.value.trim()); // Log the email value
    console.log('Password:', password.value.trim()); // Log the password value
    console.log('Confirm Password:', cpassword.value.trim()); // Log the confirm password value

    if (!validateInputs()) {
        e.preventDefault();
    }
});


function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    

    if(usernameVal===''){
        
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
    
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      
  };