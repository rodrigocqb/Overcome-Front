import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postWorkout } from "services/workoutServices";
import styled from "styled-components";
import { SheetWithExercises } from "types/sheetTypes";
import {
  SaveButton,
  SheetName,
} from "../SheetExercisesForm/SheetExercisesContainer";
import WorkoutExercise from "./WorkoutExercise";

export default function WorkoutContainer({
  sheet,
}: {
  sheet: SheetWithExercises;
}) {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const navigate = useNavigate();

  async function completeWorkout() {
    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);
    toast.loading("Enviando dados", { toastId: "loading" });

    try {
      await postWorkout({ sheetId: sheet.id });
      toast.dismiss("loading");
      navigate("/sheets");
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Houve um erro ao tentar finalizar seu treino!");
      setIsSubmitDisabled(false);
    }
  }

  return (
    <Container>
      <SheetName>{sheet.title}</SheetName>
      <ExercisesWrapper>
        {sheet?.SheetExercise?.map((value) => (
          <WorkoutExercise
            key={value.Exercise?.id}
            name={value.Exercise?.name}
            weight={value.weight}
            reps={value.reps}
            sets={value.sets}
          />
        ))}
      </ExercisesWrapper>
      <Button onClick={completeWorkout}>FINALIZAR TREINO</Button>
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

const ExercisesWrapper = styled.div`
  margin-top: 33px;
  width: 299px;
  min-height: 160px;
  max-height: 413px;
  height: 49vh;
  border: 1px solid #ffffff;
  border-radius: 18px;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  overflow-y: scroll;
`;

const Button = styled(SaveButton)`
  width: 184px;
`;
