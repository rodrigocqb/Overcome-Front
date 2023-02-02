import styled from "styled-components";
import { SheetExerciseBody, SheetExerciseData } from "types/sheetTypes";

type SheetExerciseComponentParams = SheetExerciseData & {
  setSheetExercises: React.Dispatch<
    React.SetStateAction<
      (SheetExerciseBody & {
        name: string;
      })[]
    >
  >;
  exerciseId: number;
};

export default function SheetExercise({
  name,
  weight,
  reps,
  sets,
  setSheetExercises,
  exerciseId,
}: SheetExerciseComponentParams) {
  function deleteExercise() {
    setSheetExercises((old) => old.filter((v) => v.exerciseId !== exerciseId));
  }

  return (
    <SheetExerciseContainer>
      <NameAndButtonWrapper>
        <h1>{name}</h1>
        <span onClick={deleteExercise}>X</span>
      </NameAndButtonWrapper>
      <ExerciseData>
        <div>
          <p>
            peso <span>{weight} kg</span>
          </p>
        </div>
        <div>
          <p>
            reps <span>{reps}</span>
          </p>
        </div>
        <div>
          <p>
            sets <span>{sets}</span>
          </p>
        </div>
      </ExerciseData>
    </SheetExerciseContainer>
  );
}

export const SheetExerciseContainer = styled.div`
  width: 268px;
  min-height: 73px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px 20px 12px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #474747;
`;

export const ExerciseData = styled.div`
  width: 189px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 11px;
  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const NameAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  h1 {
    width: 208px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span {
    font-weight: 600;
    color: rgba(71, 71, 71, 0.76);
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  }
`;
