export type SheetWithExercises = {
  title: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  SheetExercise: {
      weight: number;
      reps: number;
      sets: number;
      Exercise: {
          id: number;
          name: string;
      };
  }[];
};

export type Sheet = {
  id: number;
  title: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type SheetExerciseBody = {
  exerciseId: number;
  weight: number;
  reps: number;
  sets: number;
};

export type PutSheetExercisesParams = {
  sheetId: number;
  exerciseBody: SheetExerciseBody[];
};

export type SheetExerciseData = Omit<SheetExerciseBody, "exerciseId"> & {
  name: string;
};
