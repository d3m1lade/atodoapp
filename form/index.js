let fullNameInput = document.getElementById("fullname");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let fullNameError = document.getElementById("fullname-alert");
let emailError = document.getElementById("email-alert");
let passwordError = document.getElementById("password-alert");
let button = document.getElementById("button")

fullNameInput.addEventListener("keyup", function(){
    validateFullNameInput()
})

function validateFullNameInput() {
    let userFullName = fullNameInput.value;
    if(userFullName.length == 0){
        fullNameError.textContent = "Full Name is required";
        fullNameInput.style.border = "1px solid red";
   //exclamation mark is for "does not match" and the match expression is from chatgpt
    }else if(!userFullName.match(/^[a-zA-Z\s-]+$/)){
        fullNameError.textContent = "Name cannot contain numbers"
    }else{
        fullNameError.textContent = "";
        fullNameInput.style.border = "2px solid green";
    }
    }


    emailInput.addEventListener("keyup", function(){
        validateEmailInput()
    })

    function validateEmailInput() {
        let userEmail = emailInput.value;
        if(userEmail.length == 0){
            emailError.textContent = "Email is required";
            emailInput.style.border = "1px solid red";
        }else if(!userEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            emailError.textContent = "Invalid email format"
            emailInput.style.border = "1px solid red"
        }else{
            emailError.textContent = "";
            emailInput.style.border = "2px solid green";
        }
    }


    passwordInput.addEventListener("keyup", function(){
        validatePasswordInput()
    })

    function validatePasswordInput() {
        let userPassword = passwordInput.value;
        if(userPassword.length == 0){
            passwordError.textContent = "Password is required";
            passwordInput.style.border = "1px solid red";
        }else if(!userPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
            passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            passwordInput.style.border = "1px solid red"
        }else{
            passwordError.textContent = "";
            passwordInput.style.border = "2px solid green";
        }
    }

