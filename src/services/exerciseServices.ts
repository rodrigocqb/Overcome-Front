import { createAuthorizationHeader, get } from "helpers/request";
import { Exercise } from "types/exerciseTypes";

export async function getExercises(): Promise<Exercise[]> {
  const config = createAuthorizationHeader();
  const response = await get("/exercises", config);
  return response.data as Exercise[];
}
