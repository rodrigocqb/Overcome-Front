/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import api from "../services/api";

export type RequestPromise = Promise<AxiosResponse<any, any>>;
export type Response = AxiosResponse;
export type Error = AxiosError;

export async function get(url: string, config?: AxiosRequestConfig<any> | undefined) {
  const promise = api.get(url, config);
  return promise as RequestPromise;
}

export async function post(url: string, data: any, config?: AxiosRequestConfig<any> | undefined) {
  const promise = api.post(url, data, config);
  return promise as RequestPromise;
}

export async function put(url: string, data: any, config?: AxiosRequestConfig<any> | undefined) {
  const promise = api.put(url, data, config);
  return promise as RequestPromise;
}

export async function deleteReq(url: string, config?: AxiosRequestConfig<any> | undefined) {
  const promise = api.delete(url, config);
  return promise as RequestPromise;
}
