import { AxiosResponse } from "axios";
import { createAuthorizationHeader, get, post, put } from "helpers/request";
import { Objective } from "types/objectiveTypes";

export async function getObjective(): Promise<AxiosResponse<Objective>> {
  const config = createAuthorizationHeader();
  return get("/objectives", config);
}

export async function postObjective(
  body: Partial<Objective>,
): Promise<AxiosResponse<Objective>> {
  const config = createAuthorizationHeader();
  return post("/objectives", body, config);
}

export async function putObjective(
  body: Partial<Objective>,
): Promise<AxiosResponse<Objective>> {
  const config = createAuthorizationHeader();
  return put("/objectives", body, config);
}
