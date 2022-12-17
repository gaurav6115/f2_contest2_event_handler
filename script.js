let emailInput = document.getElementById("email");
let pwdInput = document.getElementById("password");
let button = document.getElementById("btnn");

let emError = document.getElementById("emailError");
let pwdError = document.getElementById("passwordError");
let message = document.getElementById("message");

emailInput.onchange = validfun;
pwdInput.onchange = validfun;

function validfun() {
    let email = emailInput.value;
    let password = pwdInput.value;

    if (email != "" && email.length >= 3 && email.includes("@") && email.includes(".")) {
        emError.innerText = "";
    }
    

    if (email != "" && email.length >= 3 && email.includes("@") && email.includes(".")) {
        emError.innerText = "";
        if(password.length > 8){           
            pwdError.innerText = "";
            message.innerText = "All good to go!"
            message.style.color = "green"
        }
    }

    if(password.length > 8){
        pwdError.innerText = "";
    }
   
    else {
        emError.innerText = "Make sure email is more than 3 characters and has @ and ."
        emError.style.color = "red";
        pwdError.innerText = "Make sure password is more than 8 characters."
        pwdError.style.color = "red"
    }
}

 function cnfrm(){
    confirm("Press Ok to close this window");
    alert("Successful signup");
 }

button.onclick = cnfrm;