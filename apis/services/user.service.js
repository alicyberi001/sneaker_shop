import { urls } from "../urls";
import { httpClient } from "../client";

export async function getUserInfo() {
  const response = await httpClient().get(urls.user);
  return response.data;
}

export async function getProducts() {
  const response = await httpClient().get(urls.sneaker,{params : {page : 1, limit : 42}});
  return response.data;
}