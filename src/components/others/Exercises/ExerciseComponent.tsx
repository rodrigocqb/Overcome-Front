import styled from "styled-components";
import { Exercise } from "types/exerciseTypes";

export default function ExerciseComponent({
  exercises,
}: {
  exercises: Exercise[] | undefined;
}) {
  return (
    <ExercisesWrapper>
      {exercises?.map((value) => (
        <p key={value.id}>{value.name}</p>
      ))}
    </ExercisesWrapper>
  );
}

const ExercisesWrapper = styled.div`
  margin-top: 20px;
  width: 314px;
  height: 360px;
  background: rgba(178, 150, 130, 0.69);
  border-radius: 17px;
  padding: 29px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  font-size: 19px;
  font-weight: 300;
  color: #FFFFFF;
  word-break: break-word;
`;
