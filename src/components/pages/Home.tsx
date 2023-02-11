import { AxiosError, HttpStatusCode } from "axios";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import { useQuery } from "react-query";
import { getObjective } from "services/objectiveServices";
import styled from "styled-components";
import Objective from "./Objective";
import background from "../../assets/objective/objectiveblur.png";
import mainBackground from "../../assets/objective/objectivebackground.png";
import Header from "components/others/Header";
import Footer from "components/others/Footer";
import Sheets from "./Sheets";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isLoading, error } = useQuery("objectives", getObjective, {
    retry: false,
    onError: (err: AxiosError) => err,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Container>
        <Header />
        <MainSection>
          <LoadingPlaceholder />
        </MainSection>
        <Footer />
      </Container>
    );
  }

  if (error?.response?.status === HttpStatusCode.NotFound) {
    return <Objective hasObjective={false} />;
  }

  if (error?.response?.status === HttpStatusCode.Unauthorized) {
    localStorage.removeItem("user");
    navigate("/sign-in");
  }

  return <Sheets />;
}

const Container = styled.main`
  position: relative;
  height: var(--doc-height);
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(var(--doc-height) - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBackground});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
