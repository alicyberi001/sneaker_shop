import { errorHandler } from "../libs/errorHandling.js";
import {
  getBrands,
  getProducts,
  searchFunc,
  getUserInfo,
} from "../apis/services/user.service";
import { toast } from "../libs/toast.js";

const username = document.getElementById("username");
let brandCont = document.getElementById("brandCont");
let cont = document.getElementById("cont");
let cartContainer = document.getElementById("cartContainer");
let searchBar = document.getElementById("searchBar");
let actionBar = document.getElementById("action-bar");
let leftSpan = document.getElementById("leftSpan");
let rightSpan = document.getElementById("rightSpan");
let contb = document.getElementById("contb");
let AllBtn = document.getElementById("AllBtn");

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
    greeting = "Good morning 🐻";
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
  <button id="${brand}_id" class="w-full h-11 bg-white text-black rounded-full py-2 px-4 border-2 flex items-center justify-center whitespace-nowrap ">${brand}</button>
`;
}

function renderBrands(brandArr) {
  brandCont.innerHTML = `<button id="AllBtn" class=" bg-[#343a40] w-full h-11 text-white rounded-full py-2 px-4 border-2 flex items-center justify-center whitespace-nowrap">All</button>`;
  brandCont.innerHTML += brandArr.map((el) => brandGenerator(el)).join(" ");
}

async function fetchBrands() {
  let response = await getBrands(1);
  renderBrands(response);
}

brandCont.addEventListener("click", clickBrand);

let currentBrand = null;
let currentPage = 1;
let totalProducts = 0;
let currentElement;
let newElement;
async function clickBrand(event) {
  if (!currentElement) {
    currentElement = event.target;
    currentElement.classList.replace("bg-white", "bg-[#343a40]");
    currentElement.classList.replace("text-black", "text-white");

    document
      .getElementById("AllBtn")
      .classList.replace("bg-[#343a40]", "bg-white");
    document
      .getElementById("AllBtn")
      .classList.replace("text-white", "text-black");
  } else if (currentElement) {
    newElement = event.target;
    currentElement.classList.replace("bg-[#343a40]", "bg-white");
    currentElement.classList.replace("text-white", "text-black");
    newElement.classList.replace("bg-white", "bg-[#343a40]");
    newElement.classList.replace("text-black", "text-white");
    currentElement = newElement;
  }
  let brandName = event.target.textContent;
  currentBrand = brandName === "All" ? null : brandName;

  await fetchProducts(1);
}

// =====================================================

function renderCards(cardArray) {
  cartContainer.innerHTML = cardArray.map((el) => cardGenerator(el)).join(" ");
}

function cardGenerator({ imageURL, name, price, id }) {
  return `
  <a href="/sneaker?id=${id}"><div id="${id}" class="w-[182px] h-[244px] ">
      <div class="w-[180px] h-[180px] bg-slate-100 rounded-[24px] flex justify-center items-center overflow-hidden">
          <img src="${imageURL}" alt="image">
      </div>
      <p class="font-bold text-[20px] line-clamp-1">${name}</p>
      <p class="font-semibold text-[16px]">$ ${price}.00</p>
  </div></a>`;
}

async function fetchProducts(page) {
  currentPage = page;
  try {
    const response = await getProducts(page, currentBrand);
    totalProducts = response.total;
    renderCards(response.data);
    setupPagination();
  } catch (error) {
    toast(error, "error");
  }
}

// =====================================================

searchBar.addEventListener("focus", () => {
  actionBar.classList.add("hidden");
  contb.classList.add("hidden");
});

searchBar.addEventListener("blur", () => {
  actionBar.classList.remove("hidden");
  contb.classList.remove("hidden");
});

let currentSearch = "";
let totalSearchResults = 0;

searchBar.addEventListener("input", searchAction);

async function searchAction() {
  currentSearch = this.value;
  await fetchSearchResults(1);
  if (currentSearch.length == 0) {
    leftSpan.textContent = "Most Popular";
    rightSpan.textContent = "See All";
  } else {
    leftSpan.textContent = `Result for "${currentSearch}"`;
    rightSpan.textContent = `${totalSearchResults} founds`;
  }
}

// function debounce(fn, delay = 2000) {
//   let timeout = null;

//   return (...args) => {
//     clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   }
// }

async function fetchSearchResults(page) {
  currentPage = page;
  const response = await searchFunc(page, currentSearch);
  if (response && response.data) {
    totalSearchResults = response.total;
    if (response.data.length === 0) {
      cartContainer.classList.replace("grid-cols-2", "grid-cols-1");
      cartContainer.innerHTML = `<div class="w-full flex items-center justify-center px-3 mt-40" ><img src="./pics/no-search-found.png" alt="notFound"></div>`;
    } else {
      cartContainer.classList.replace("grid-cols-1", "grid-cols-2");
      renderCards(response.data);
    }
    setupPagination(true);
  }
}

function setupPagination(isSearch = false) {
  const totalItems = isSearch ? totalSearchResults : totalProducts;
  const totalPages = Math.ceil(totalItems / 10);
  let paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.className =
      "w-10 ml-4 border-2 px-2 py-2 rounded-[10px] cursor-pointer";
    button.textContent = i;

    if (i === currentPage) {
      button.classList.add("bg-[#343a40]", "text-white");
    }

    button.addEventListener("click", () => {
      if (isSearch) {
        fetchSearchResults(i);
      } else {
        fetchProducts(i);
      }
    });

    paginationDiv.appendChild(button);
  }
}

async function init() {
  fetchUserInfo();
  getGreeting();
  fetchBrands();
  fetchProducts(1);
}

init();

cont.addEventListener("click", (event) => {
  console.log(event.target);
});
