import ExerciseComponent from "components/others/Exercises/ExerciseComponent";
import ExerciseForm from "components/others/Exercises/ExerciseForm";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import { useQuery } from "react-query";
import { getExercises } from "services/exerciseServices";
import styled from "styled-components";

export default function Exercises() {
  const { data, isLoading } = useQuery("exercises", getExercises, {
    retry: false,
  });

  if (isLoading) {
    return <LoadingPlaceholder />;
  }
  console.log(data);
  return (
    <Container>
      <Title>
        <h1>Exercícios</h1>
      </Title>
      <ExerciseForm />
      {data?.length === 0 ? (
        <span>
          Não há exercícios cadastrados na plataforma! Cadastre um para começar
          a usar
        </span>
      ) : (
        <ExerciseComponent />
      )}
    </Container>
  );
}

const Container = styled.main`
  height: 90vh;

    span {
        margin-top: 10px;
        margin-left: 9px;
        color: #4e4e4e;
    }
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  width: 100%;
  color: #303030;
  margin-top: 80px;
  margin-left: 15px;
  margin-bottom: 10px;
`;