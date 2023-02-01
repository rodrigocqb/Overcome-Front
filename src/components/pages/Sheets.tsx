import background from "../../assets/sheets/sheetsBgOpacity.png";
import styled from "styled-components";
import Header from "components/others/Header";
import Footer from "components/others/Footer";
import { useState } from "react";
import { ButtonWrapper, SpanWrapper } from "./Exercises";
import SheetsContainer from "components/others/Sheets/SheetsContainer";
import { useQuery, useQueryClient } from "react-query";
import { getSheets } from "services/sheetServices";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import SheetForm from "components/others/Sheets/SheetForm";

export default function Sheets() {
  const [showForm, setShowForm] = useState(false);

  const { data, isLoading } = useQuery("sheets", getSheets);

  const queryClient = useQueryClient();

  if (isLoading) {
    return (
      <Container>
        <Header />
        <LoadingPlaceholder />
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <MainSection>
        <Wrapper>
          <ButtonWrapper
            showForm={showForm}
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            <div>+</div>
            <p>criar nova ficha</p>
          </ButtonWrapper>

          {showForm ? (
            <SheetForm
              queryClient={queryClient}
              sheets={data}
              setShowForm={setShowForm}
            />
          ) : (
            <>
              <Title>
                <h1>FICHAS DE TREINO</h1>
              </Title>
              {data?.length === 0 ? (
                <SpanWrapper>
                  Você não possui fichas cadastradas. Crie uma para começar a
                  usar!
                </SpanWrapper>
              ) : (
                <SheetsContainer
                  sheets={data}
                  queryClient={queryClient}
                />
              )}
            </>
          )}
        </Wrapper>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
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
  background-color: #cdc1b1;
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
