import { errorHandler } from "../libs/errorHandling.js";
import { getUserInfo } from "../apis/services/user.service";
import { getBrands } from "../apis/services/user.service";
import { getProducts } from "../apis/services/user.service";
import { removeSessionToken } from "../libs/session_manager";

const username = document.getElementById("username");
let brandCont = document.getElementById("brandCont");
let cartContainer = document.getElementById("cartContainer");

async function fetchUserInfo() {
  try {
    let response = await getUserInfo();
    console.log(response);
    username.innerText = response.username;
    username.setAttribute("title", response.username);
  } catch (error) {
    errorHandler(error);
  }
}

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

function brandGenerator(brand) {
  return `
  <button id="${brand}_id" class="w-full h-11 bg-white rounded-full py-2 px-4 border-2 flex items-center justify-center whitespace-nowrap ">${brand}</button>
`;
}

function renderBrands(brandArr) {
  brandCont.innerHTML = brandArr.map((el) => brandGenerator(el)).join(" ");
}

async function fetchBrands() {
  let response = await getBrands(1);
  renderBrands(response);
}

brandCont.addEventListener("click", clickBrand);

async function clickBrand(event) {
  let brandName = event.target.textContent;
  // await fetchBrands();
  // event.target.classList.add("font-bold");
  const response = await getProducts(1, brandName);
  renderCards(response.data);
}

function renderCards(cardArray) {
  cartContainer.innerHTML = cardArray.map((el) => cardGenerator(el)).join(" ");
}

function cardGenerator({ imageURL, name, price }) {
  return `
  <div id="cart" class="w-[182px] h-[244px] ">
      <div class="w-[182px] h-[182px] bg-slate-100 rounded-[24px] flex justify-center items-center overflow-hidden">
          <img src="${imageURL}" alt="image">
      </div>
      <p class="font-bold text-[20px] line-clamp-1">${name}</p>
      <p class="font-semibold text-[16px]">$ ${price}.00</p>
  </div>`;
}

async function init() {
  fetchUserInfo();
  getGreeting();
  fetchBrands();
}

init();
