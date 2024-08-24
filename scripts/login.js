import Toastify from 'toastify-js'
const inputpass = document.getElementById("password");
const inputuser = document.getElementById("inputuser");
const eyes = document.getElementById("eyes");
const loginBtn = document.getElementById("loginBtn")
console.log(eyes);


function hideHandler(){
    if(inputpass.type === "password"){
    inputpass.type = "text";
    eyes.classList.remove("fa-eye");
    eyes.classList.add("fa-eye-slash")
}
else
{
    inputpass.type = "password";
    eyes.classList.remove("fa-eye-slash");
    eyes.classList.add("fa-eye");
}
}

function enableBtn() {
    if(inputpass.value != "" && inputuser.value != ""){
        loginBtn.classList.add("bg-black")
    }
    else{
        loginBtn.classList.remove("bg-black")
    }
}

eyes.addEventListener("click", hideHandler)
inputpass.addEventListener("input", enableBtn)

