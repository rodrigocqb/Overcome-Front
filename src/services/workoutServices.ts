import { createAuthorizationHeader, post } from "helpers/request";
import { WorkoutBody } from "types/workoutTypes";

export async function postWorkout(body: WorkoutBody) {
  const config = createAuthorizationHeader();
  return post("/workouts", body, config);
}
