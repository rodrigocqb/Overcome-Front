import dayjs from "dayjs";
import styled from "styled-components";
import { WorkoutData } from "types/workoutTypes";

export default function WorkoutHistory({ data }: { data: WorkoutData[] }) {
  return (
    <Container>
      {data.length === 0 ? (
        <>
          <p>Você ainda não tem nenhum treino no histórico.</p>
          <p>Mas, não deixe isso te impedir! Comece sua jornada hoje!</p>
          <p>Se quiser, você pode registrar seus treinos de cardio também.</p>
        </>
      ) : (
        <>
          {data.map((value) => (
            <WorkoutWrapper key={value.id}>
              <h1>{value.cardio ? value.cardio : value.Sheet.title}</h1>
              <h2>{dayjs(value.createdAt).format("DD/MM/YY")}</h2>
            </WorkoutWrapper>
          ))}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  width: 295px;
  height: 282px;
  background-color: #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color: #757575;
  overflow-y: scroll;

  p {
    margin-bottom: 20px;
  }
`;

const WorkoutWrapper = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 600;
    width: 160px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
