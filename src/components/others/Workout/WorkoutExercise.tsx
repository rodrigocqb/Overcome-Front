import { useState } from "react";
import styled from "styled-components";
import { SheetExerciseData } from "../../../types/sheetTypes";
import {
  ExerciseData,
  NameAndButtonWrapper,
  SheetExerciseContainer,
} from "../SheetExercisesForm/SheetExercise";

export default function WorkoutExercise({
  name,
  weight,
  reps,
  sets,
}: SheetExerciseData) {
  const [isDone, setIsDone] = useState(false);

  return (
    <SheetExerciseContainer>
      <NameAndButtonWrapper>
        <h1>{name}</h1>
        <CheckBox
          isDone={isDone}
          onClick={() => setIsDone(!isDone)}
        ></CheckBox>
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

const CheckBox = styled.div<{ isDone: boolean }>`
  width: 14px;
  height: 14px;
  background-color: ${({ isDone }) => (isDone ? "#737373" : "#ffffff")};
  border: 1px solid #737373;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;
