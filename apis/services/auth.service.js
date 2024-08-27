import { urls } from "../urls";
import { httpClient } from "../client";

export async function login(data) {
  const response = await httpClient().post(urls.auth.login, data);
  return response.data;
}

export async function signup(data) {
  const response = await httpClient().post(urls.auth.signup, data);
  return response.data;
}
