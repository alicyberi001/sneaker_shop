// import { urls } from "../apis/urls.js";
// import { httpClient } from "../apis/client.js";
// import { getProducts, getSneaker } from "../apis/services/user.service";

// let cartContainer = document.getElementById("cartContainer");


// function cardGenerator({ imageURL, name, price }) {
//   return `
//   <a href="/sneaker.html"><div id="cart" class="w-[182px] h-[244px] ">
//       <div class="w-[182px] h-[182px] bg-slate-100 rounded-[24px] flex justify-center items-center overflow-hidden">
//           <img src="${imageURL}" alt="image">
//       </div>
//       <p class="font-bold text-[20px] line-clamp-1">${name}</p>
//       <p class="font-semibold text-[16px]">$ ${price}.00</p>
//   </div></a>`;
// }

// function renderCards(cardArray) {
//   cartContainer.innerHTML = cardArray.map((el) => cardGenerator(el)).join(" ");
// }

// function setupPagination() {
//   const totalPages = Math.ceil(42 / 10);
//   let paginationDiv = document.getElementById("pagination");
//   paginationDiv.innerHTML = "";
//   for (let i = 1; i <= totalPages; i++) {
//     const button = document.createElement("button");
//     button.className = "w-10 ml-4 border-2 px-2 py-2 rounded-[10px] cursor-pointer";
//     button.textContent = i;
//     button.addEventListener("click", () => fetchProducts(i));
//     paginationDiv.appendChild(button);
//   }
// }

// async function fetchProducts(page = 1) {
//   const cardArray = await getProducts(page);
//   renderCards(cardArray.data);
  
// }

// fetchProducts();
// setupPagination();
