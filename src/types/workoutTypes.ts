import { Sheet } from "./sheetTypes";

export type WorkoutBody = {
  sheetId?: number;
  cardio?: Cardio;
};

export enum Cardio {
  RUNNING = "RUNNING",
  CYCLING = "CYCLING",
  SWIMMING = "SWIMMING",
}

export type Workout = {
  id: number;
  userId: number;
  sheetId: number | null;
  cardio: Cardio | null;
  createdAt: Date;
  updatedAt: Date;
};

export type WorkoutData = Workout & {
  Sheet: Sheet;
};
