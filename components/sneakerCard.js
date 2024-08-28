import { urls } from "../apis/urls.js";
import { httpClient } from "../apis/client.js";
import { getProducts } from "../apis/services/user.service";

let cartContainer = document.getElementById('cartContainer')

// let productsPerPage = 10;
// let currentPage = 1;
// let totalProducts = 10;

// async function fetchProducts() {
//   try {
//     const response = await getProducts();
//     console.log(response);
//     let cardArray = response.data;
//     cardGenerator(cardArray)
//   } catch (error) {
//     console.log(error);
//   }
// }

 function cardGenerator({ imageURL, name, price }) {
  return `
  <div id="cart" class="w-[182px] h-[244px] ">
      <div class="w-[182px] h-[182px] bg-slate-100 rounded-[24px] flex justify-center items-center">
          <img src="${imageURL}" alt="image">
      </div>
      <p class="font-bold text-[20px] line-clamp-1">${name}</p>
      <p class="font-semibold text-[16px]">$ ${price}</p>
  </div>`;
}
// fetchProducts();

 function renderCards(cardArray) {
  cartContainer.innerHTML = cardArray
    .map((el) => cardGenerator(el))
    .join(" ");
}

async function init() {
  const cardArray = await getProducts();
  console.log(cardArray);
  renderCards(cardArray.data);
}


init();
