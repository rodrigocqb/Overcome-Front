import { AxiosResponse } from "axios";
import { UserData } from "types/userTypes";
import { post } from "../helpers/request";

export async function postSignIn(body: {
  email: string;
  password: string;
}): Promise<AxiosResponse<UserData, any>> {
  const response = await post("/users/sign-in", body);
  return response.data;
}

export async function postSignUp(body: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await post("/users/sign-up", body);
  return response.data;
}

export async function postOAuth(body: {
  name: string;
  email: string;
}): Promise<AxiosResponse<UserData, any>> {
  const response = await post("/users/oauth", body);
  return response.data;
}
