import { urls } from "../urls";
import { httpClient } from "../client";

export async function getUserInfo() {
  const response = await httpClient().get(urls.user);
  return response.data;
}

export async function getProducts(page, brands = null) {
  const params = { page, limit: 10 };
  if (brands) {
    params.brands = brands;
  }
  const response = await httpClient().get(urls.sneaker, { params });
  return response.data;
}

export async function getBrands() {
  const response = await httpClient().get(urls.brands);
  return response.data;
}

export async function searchFunc(page = 1, search = null) {
  const params = { page, limit: 10 };
  if (search) {
    params.search = search;
  }
  const response = await httpClient().get(urls.sneaker, { params });
  return response.data;
}

export async function getSneaker(id) {
  const response = await httpClient().get(urls.item(id));
  return response.data;
}
