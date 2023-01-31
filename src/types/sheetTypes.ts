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
