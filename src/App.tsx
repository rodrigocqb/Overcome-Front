import { ReactNode } from "react";
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
            theme="colored"
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
