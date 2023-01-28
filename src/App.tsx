import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./components/pages/Home";
import SignUp from "components/pages/SignUp";
import SignIn from "components/pages/SignIn";
import useToken from "hooks/useToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import UserContextProvider from "contexts/UserContext";
import { GlobalStyle } from "styles/GlobalStyle";

export default function App() {
  const token = useToken();

  return (
    <>
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
        <Background>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<SignUp />}
              />
              <Route
                path="/sign-in"
                element={<SignIn />}
              />
              <Route
                element={
                  <ProtectedRoute
                    token={token}
                    noTokenPath={"/"}
                  />
                }
              >
                <Route
                  path="/home"
                  element={<Home />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Background>
      </UserContextProvider>
    </>
  );
}

function Background({ children }: { children: ReactNode }) {
  return <Layer1>{children}</Layer1>;
}

const Layer1 = styled.div`
  & {
    width: 100vw;

    background-color: var(--background-color);
  }
`;

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
