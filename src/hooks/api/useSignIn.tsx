import useAsync from "../useAsync";

import * as userService from "../../services/userServices";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync(userService.postSignIn, false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}