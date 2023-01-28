import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "helpers/oauth";
import { createContext, ReactNode, useContext } from "react";
import { postOAuth } from "services/userServices";
import { UserData, UserStates } from "types/userTypes";

const UserContext = createContext({} as UserStates);

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }: { children: ReactNode }) {
  const userData: UserData | null = JSON.parse(localStorage.getItem("user") as string);

  const getTokenWithGoogleOAuth = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);

    const { displayName: name, email } = response.user;

    if (name && email) {
      const user = await postOAuth({ name, email });
      localStorage.setItem("user", JSON.stringify(user));
    }

    return;
  };

  const states = {
    userData,
    getTokenWithGoogleOAuth,
  };
  return <UserContext.Provider value={states as UserStates}>{children}</UserContext.Provider>;
}
