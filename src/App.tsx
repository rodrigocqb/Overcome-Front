import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./components/pages/Home";
import SignUp from "components/pages/SignUp";
import SignIn from "components/pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import UserContextProvider from "contexts/UserContext";
import { GlobalStyle } from "styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import Objective from "components/pages/Objective";
import Exercises from "components/pages/Exercises";
import Sheets from "components/pages/Sheets";
import SheetExercisesForm from "components/pages/SheetExercisesForm";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <GlobalStyle />
          <StyledToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <BrowserRouter>
            <Routes>
              <Route
                path="/sign-up"
                element={<SignUp />}
              />
              <Route
                path="/sign-in"
                element={<SignIn />}
              />
              <Route element={<ProtectedRoute noTokenPath={"/sign-in"} />}>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/objective"
                  element={<Objective />}
                />
                <Route
                  path="/exercises"
                  element={<Exercises />}
                />
                <Route
                  path="/sheets"
                  element={<Sheets />}
                />
                <Route
                  path="/sheets/:sheetId"
                  element={<SheetExercisesForm />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  justify-content: flex-end;
  .Toastify__toast {
    width: 240px;
  }
  .Toastify__toast {
  }
  .Toastify__close-button {
    width: 20px;
  }
`;
