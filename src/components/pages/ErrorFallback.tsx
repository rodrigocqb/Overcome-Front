import background from "../../assets/objective/objectiveblur.png";
import mainBackground from "../../assets/objective/objectivebackground.png";
import location from "../../assets/errorFallback/location_search.svg";
import styled from "styled-components";
import Header from "components/others/Header";
import Footer from "components/others/Footer";
import { useNavigate } from "react-router-dom";

export default function ErrorFallback() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <MainSection>
        <h1>Opa, essa página não existe!</h1>
        <h1>Clique na imagem para ser redirecionado à página principal</h1>
        <img
          onClick={() => navigate("/")}
          src={location}
          alt="not found"
        />
      </MainSection>
      <Footer />
    </Container>
  );
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
  height: calc(100vh - 189px);
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

  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 20px;
  }

  img {
    width: 183px;
    height: 128px;
  }
`;
