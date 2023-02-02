export type WorkoutBody = {
  sheetId?: number;
  cardio?: Cardio;
};

export enum Cardio {
  RUNNING = "RUNNING",
  CYCLING = "CYCLING",
  SWIMMING = "SWIMMING",
}
