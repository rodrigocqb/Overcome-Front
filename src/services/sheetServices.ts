import {
  createAuthorizationHeader,
  deleteReq,
  get,
  post,
  put,
} from "helpers/request";
import { PutSheetExercisesParams, Sheet, SheetWithExercises } from "types/sheetTypes";

export async function getSheets(): Promise<SheetWithExercises[]> {
  const config = createAuthorizationHeader();
  const response = await get("/sheets", config);
  return response.data as SheetWithExercises[];
}

export async function postSheet(body: { title: string }): Promise<Sheet> {
  const config = createAuthorizationHeader();
  const respose = await post("/sheets", body, config);
  return respose.data as Sheet;
}

export async function putSheetExercises({ sheetId, exerciseBody }: PutSheetExercisesParams) {
  const config = createAuthorizationHeader();
  const response = await put(`/sheets/${sheetId}`, exerciseBody, config);
  return response.data;
}

export async function deleteSheet(sheetId: number): Promise<void> {
  const config = createAuthorizationHeader();
  await deleteReq(`/sheets/${sheetId}`, config);
  return;
}
