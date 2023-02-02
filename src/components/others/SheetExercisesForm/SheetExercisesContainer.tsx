import SheetExercise from "./SheetExercise";
import { useState } from "react";
import styled from "styled-components";
import { SheetExerciseBody } from "types/sheetTypes";
import Searchbar from "./Searchbar";
import ExerciseDataForm from "./ExerciseDataForm";

export default function SheetExercisesContainer({ name }: { name: string }) {
  const [sheetExercises, setSheetExercises] = useState<
    (SheetExerciseBody & { name: string })[]
      >([]);
  const [exerciseData, setExerciseData] = useState<
    (SheetExerciseBody & { name: string }) | null
      >(null);

  return (
    <Container>
      <SheetName>{name}</SheetName>
      <Searchbar setExerciseData={setExerciseData} />
      {(sheetExercises.length > 0 || exerciseData !== null) && (
        <>
          <ExercisesWrapper>
            <>
              {sheetExercises.map((value) => (
                <SheetExercise
                  key={value.exerciseId}
                  name={value.name}
                  weight={value.weight}
                  reps={value.reps}
                  sets={value.sets}
                  setSheetExercises={setSheetExercises}
                  exerciseId={value.exerciseId}
                />
              ))}
            </>
            <>
              {exerciseData !== null && (
                <ExerciseDataForm
                  exerciseData={exerciseData}
                  setExerciseData={setExerciseData}
                  setSheetExercises={setSheetExercises}
                />
              )}
            </>
          </ExercisesWrapper>
          <SaveButton>SALVAR FICHA</SaveButton>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 249px);
  width: 326px;
  background-color: #85b6cb;
  border-radius: 35px;
  margin-bottom: 22px;
  margin-top: 38px;
  padding: 26px 14px 27px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SheetName = styled.h1`
  font-weight: 900;
  font-size: 17px;
  color: #ffffff;
`;

const ExercisesWrapper = styled.div`
  margin-top: 61px;
  width: 299px;
  min-height: 160px;
  max-height: 321px;
  height: 38vh;
  border: 1px solid #ffffff;
  border-radius: 18px;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  overflow-y: scroll;
`;

const SaveButton = styled.div`
  margin-top: 26px;
  width: 152px;
  min-height: 45px;
  background-color: #04455b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23.5px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  justify-content: center;
  display: flex;
  align-items: center;
`;
