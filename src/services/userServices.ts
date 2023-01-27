import { AxiosResponse } from "axios";
import { post } from "../helpers/request";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function postSignIn(body: { email: string; password: string }) {
  return post(`${BASE_URL}/users/sign-in`, body);
}

export function postSignUp(body: { name: string; email: string; password: string }) {
  return post(`${BASE_URL}/users/sign-up`, body);
}

export function postOAuth(body: { name: string; email: string }): Promise<AxiosResponse<{token: string}, any>> {
  return post(`${BASE_URL}/users/oauth`, body);
}
