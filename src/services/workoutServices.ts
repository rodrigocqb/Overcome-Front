import { createAuthorizationHeader, get, post } from "helpers/request";
import { WorkoutBody, WorkoutData } from "types/workoutTypes";

export async function postWorkout(body: WorkoutBody) {
  const config = createAuthorizationHeader();
  return post("/workouts", body, config);
}

export async function getWorkouts(): Promise<WorkoutData[]> {
  const config = createAuthorizationHeader();
  const response = await get("/workouts", config);
  return response.data as WorkoutData[];
}
