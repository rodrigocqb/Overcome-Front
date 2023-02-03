import { createAuthorizationHeader, get, post } from "helpers/request";
import { Journal } from "types/journalTypes";

export async function getJournals(): Promise<Journal[]> {
  const config = createAuthorizationHeader();
  const response = await get("/journals", config);
  return response.data as Journal[];
}

export async function postJournal(text: string): Promise<Journal> {
  const config = createAuthorizationHeader();
  const response = await post("/journals", { text }, config);
  return response.data as Journal;
}
