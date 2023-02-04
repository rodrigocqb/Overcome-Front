import styled from "styled-components";
import { SheetExerciseBody } from "types/sheetTypes";

type ExerciseDataFormParams = {
  exerciseData: SheetExerciseBody & { name: string };
  setSheetExercises: React.Dispatch<
    React.SetStateAction<
      (SheetExerciseBody & {
        name: string;
      })[]
    >
  >;
  setExerciseData: React.Dispatch<
    React.SetStateAction<
      | (SheetExerciseBody & {
          name: string;
        })
      | null
    >
  >;
};

export default function ExerciseDataForm({
  exerciseData,
  setSheetExercises,
  setExerciseData,
}: ExerciseDataFormParams) {
  function handleChange({
    value,
    name,
  }: {
    value: string | number;
    name: string;
  }) {
    setExerciseData({
      ...exerciseData,
      [name]: value,
    });
  }

  function cancelExercise() {
    setExerciseData(null);
  }

  function saveExercise() {
    setSheetExercises((old) => [...old, exerciseData]);
    setExerciseData(null);
  }

  function showPlaceholder(value: number) {
    if (value === 0) {
      return "";
    }
    return value;
  }

  return (
    <Container>
      <h1>{exerciseData.name}</h1>
      <div>
        <InputsWrapper>
          <input
            name="weight"
            type="number"
            placeholder="peso"
            step="0.1"
            value={showPlaceholder(exerciseData.weight)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ name: e.target.name, value: e.target.value })
            }
            min="0"
          />
          <input
            name="reps"
            type="number"
            placeholder="reps"
            value={showPlaceholder(exerciseData.reps)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ name: e.target.name, value: Number(e.target.value) })
            }
            min="0"
            step="1"
          />
          <input
            name="sets"
            type="number"
            placeholder="sets"
            value={showPlaceholder(exerciseData.sets)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ name: e.target.name, value: Number(e.target.value) })
            }
            min="0"
            step="1"
          />
        </InputsWrapper>
        <ButtonsWrapper>
          <div onClick={cancelExercise}>cancelar</div>
          <div onClick={saveExercise}>ok</div>
        </ButtonsWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 268px;
  height: 132px;
  background-color: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px 25px 11px 13px;
  font-size: 13px;
  color: #474747;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    margin-top: 9px;
  }
`;

const InputsWrapper = styled.div`
  width: 76px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 11px;

  input {
    padding-left: 8px;
    width: 76px;
    height: 25px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 23.5px;
    color: #474747;
    font-weight: 600;
    &::placeholder {
      color: #cecece;
      font-weight: 400;
    }
  }
`;

const ButtonsWrapper = styled.div`
  height: 74px;
  width: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 23.5px;
  }

  div:first-child {
    width: 95px;
    background-color: #b0634c;
  }

  div:nth-child(2) {
    width: 55px;
    background-color: #c5c5c5;
  }
`;
