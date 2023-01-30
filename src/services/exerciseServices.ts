import { createAuthorizationHeader, get, post } from "helpers/request";
import { Exercise } from "types/exerciseTypes";

export async function getExercises(): Promise<Exercise[]> {
  const config = createAuthorizationHeader();
  const response = await get("/exercises", config);
  return response.data as Exercise[];
}

export async function postExercise(body: Partial<Exercise>) {
  const config = createAuthorizationHeader();
  const response = await post("/exercises", body, config);
  return response.data;
}
