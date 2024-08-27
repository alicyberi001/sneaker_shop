import { toast } from "../libs/toast";
import { signup } from "../apis/services/auth.service";
import { errorHandler } from "../libs/errorHandling.js";
// import { setSessionToken } from "../libs/session-manager";

const signupForm = document.getElementById("signupForm");
const inputpass = document.getElementById("password");
const inputuser = document.getElementById("inputuser");
const eyes = document.getElementById("eyes");
const loginBtn = document.getElementById("loginBtn");

function hideHandler() {
  if (inputpass.type === "password") {
    inputpass.type = "text";
    eyes.classList.remove("fa-eye");
    eyes.classList.add("fa-eye-slash");
  } else {
    inputpass.type = "password";
    eyes.classList.remove("fa-eye-slash");
    eyes.classList.add("fa-eye");
  }
}

function enableBtn() {
  if (inputpass.value != "" && inputuser.value != "") {
    // loginBtn.classList.add("bg-black")
    loginBtn.style.backgroundColor = "black";
  } else {
    // loginBtn.classList.remove("bg-black")
    loginBtn.style.backgroundColor = "";
  }
}
inputpass.addEventListener("input", enableBtn);

eyes.addEventListener("click", hideHandler);

// ================================================================================================

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const usernameInput = event.target.username;
  const passwordInput = event.target.password;
  try {
    const response = await signup({
      username: usernameInput.value,
      password: passwordInput.value,
    });
    // setSessionToken(response.token);
    toast("signed in", "success");
    setTimeout(() => {
      window.location.href = "/index";
    }, 3000);
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
    errorHandler(error);
  }
});

