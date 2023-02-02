import background from "../../assets/journals/journalsBgOpacity.png";
import mainBackground from "../../assets/journals/journalsBg.png";
import styled from "styled-components";
import Header from "components/others/Header";
import Footer from "components/others/Footer";

export default function Journals() {
  return (
    <Container>
      <Header />
      <MainSection>
        <Wrapper></Wrapper>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  justify-content: center;
  background-color: #e4e4e4;
  background-image: url(${background});
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(100vh - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
  background-image: url(${mainBackground});
  background-size: 100%;
  background-position: left 0 top -76px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  width: 100%;
  color: #ffffff;
  margin-top: 18px;
  text-align: center;
  width: 258px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  min-height: 448px;
`;
