import useAsync from "../useAsync";

import * as userService from "../../services/userServices";

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(userService.postSignUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}