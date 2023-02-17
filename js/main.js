const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');




form.addEventListener("submit" , function(e) {
    // prevent the deafult behavior of form
    e.preventDefault()
    const userNameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(userNameValue === ""){
       setError(userName,"*username required")
    }
    else{
        setSuccess(userName)
    }

    if(emailValue === "") {
        setError(email,"Email is required")
    }else{
        setSuccess(email)
    }
    if(passwordValue === ""){
        setError(password,"password is required");
    }
    else {
        setSuccess(password)
    }
    if(confirmPasswordValue === "") {
        setError(confirmPassword,"password is required")
    }
    else if(passwordValue !== confirmPasswordValue){
        setError(confirmPassword,"password does not match")
    }
    else{
        setSuccess(confirmPassword)
    }
})



function setError(input , msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    small.innerText = msg;
    formControl.className = 'form-control relative error'   
}


function setSuccess (input){
    const formControl = input.parentElement;
    formControl.className = 'form-control relative success'
    console.log(formControl)
}