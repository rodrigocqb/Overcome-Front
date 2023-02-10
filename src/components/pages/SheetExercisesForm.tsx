import Footer from "components/others/Footer";
import Header from "components/others/Header";
import SheetExercisesContainer from "components/others/SheetExercisesForm/SheetExercisesContainer";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function SheetExercisesForm() {
  const sheetTitle: string = useLocation().state?.title;

  const navigate = useNavigate();

  const { sheetId } = useParams();

  useEffect(() => {
    if (sheetTitle === undefined) {
      navigate("/");
    }
  });

  return (
    <Container>
      <Header />
      <MainSection>
        <Wrapper>
          <SheetExercisesContainer
            name={sheetTitle}
            sheetId={Number(sheetId)}
          />
        </Wrapper>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  height: var(--doc-height);
  justify-content: center;
  background-color: #b1cbd6;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(var(--doc-height) - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #6c9db2;
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;
