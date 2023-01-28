export type Objective = {
  id: number;
  userId: number;
  title: string | null;
  currentWeight: number;
  goalWeight: number;
  createdAt: Date;
  updatedAt: Date;
};
