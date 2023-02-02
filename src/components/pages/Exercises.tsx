import ExerciseComponent from "components/others/Exercises/ExerciseComponent";
import ExerciseForm from "components/others/Exercises/ExerciseForm";
import Footer from "components/others/Footer";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import { useQuery, useQueryClient } from "react-query";
import { getExercises } from "services/exerciseServices";
import styled from "styled-components";
import background from "../../assets/exercises/exercisesBgOpacity.png";
import mainBackground from "../../assets/exercises/exercisesBg.png";
import Header from "components/others/Header";
import { useState } from "react";

export default function Exercises() {
  const [showForm, setShowForm] = useState(false);

  const { data, isLoading } = useQuery("exercises", getExercises, {
    retry: false,
  });
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
            <p>adicionar novo exercício</p>
          </ButtonWrapper>
          <Title>
            <h1>{showForm ? "ADICIONAR EXERCÍCIO" : "EXERCÍCIOS"}</h1>
          </Title>
          {showForm ? (
            <ExerciseForm
              queryClient={queryClient}
              exercises={data}
              setShowForm={setShowForm}
            />
          ) : (
            <>
              {data?.length === 0 ? (
                <SpanWrapper>
                Não há exercícios cadastrados na plataforma! Cadastre um para
                começar a usar
                </SpanWrapper>
              ) : (
                <ExerciseComponent exercises={data} />
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
  background-image: url(${mainBackground});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  min-height: 400px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  width: 100%;
  color: #ffffff;
  margin-top: 27px;
  text-align: center;
  width: 237px;
`;

export const SpanWrapper = styled.span`
  font-size: 15px;
  color: #ffffff;
  width: 243px;
  text-align: center;
  margin-top: 17px;
`;

export const ButtonWrapper = styled.div<{ showForm: boolean }>`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 15px;

  div {
    padding-top: 4px;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b29682;
    margin-right: 15px;
    font-size: 46px;
    font-family: "Varela Round", sans-serif;
    color: ${(props) => (props.showForm ? "#604F43" : "#ffffff")};
  }
`;
