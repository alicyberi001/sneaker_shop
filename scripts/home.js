import { errorHandler } from "../libs/errorHandling.js";
import { getUserInfo } from "../apis/services/user.service";
// import { getUserTasks } from "../apis/services/task.service";
import { removeSessionToken } from "../libs/session_manager";
// import {
//   initTaskCardListeners,
//   taskCardGenerator,
// } from "../components/task-card";

// const tasksListContainer = document.getElementById("tasks-list-container");

const username = document.getElementById("username");
// document.getElementById("logout-btn").addEventListener("click", () => {
//   removeSessionToken();
//   window.location.href = "/";
// });

async function fetchUserInfo() {
  try {
    const response = await getUserInfo();
    console.log(response);
    username.innerText = response.username;
    username.setAttribute("title", response.username);
  } catch (error) {
    errorHandler(error);
  }
}

// async function renderTasks(list) {
//   tasksListContainer.innerHTML = list
//     .map((el) => taskCardGenerator(el))
//     .join(" ");
// }

async function init() {
  //   fetchUserInfo();
  //   const list = await getUserTasks();
  fetchUserInfo();
  getGreeting();
  //   renderTasks(list);
  //   initTaskCardListeners(list, renderTasks);
}

init();

function getGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours >= 6 && hours < 12) {
    greeting = "Good morning ❤️";
  } else if (hours >= 12 && hours < 14) {
    greeting = "Good afternoon 🤠";
  } else if (hours >= 14 && hours < 18) {
    greeting = "Good evening 😎";
  } else {
    greeting = "Good night 😴";
  }
  document.getElementById("time").textContent = greeting;
}
