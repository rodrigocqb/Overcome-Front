import { UserData } from "types/userTypes";

export default function useUserData() {
  const userData = JSON.parse(localStorage.getItem("user") as string);

  return userData as UserData;
}
