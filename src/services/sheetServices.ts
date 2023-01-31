import { createAuthorizationHeader, get } from "helpers/request";
import { SheetWithExercises } from "types/sheetTypes";

export async function getSheets(): Promise<SheetWithExercises[]> {
  const config = createAuthorizationHeader();
  const response = await get("/sheets", config);
  return response.data as SheetWithExercises[];
}
