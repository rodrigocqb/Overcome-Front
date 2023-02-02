export type SheetWithExercises = {
  title: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  SheetExercise: {
    Exercise: {
      id: number;
      name: string;
    };
  }[];
  id: number;
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
