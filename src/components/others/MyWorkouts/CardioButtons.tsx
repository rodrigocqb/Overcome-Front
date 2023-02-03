import { useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { postWorkout } from "services/workoutServices";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Cardio } from "types/workoutTypes";

export default function CardioButtons({
  queryClient,
}: {
  queryClient: QueryClient;
}) {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const cardioWorkoutMutation = useMutation((exercise: Cardio) => postWorkout({ cardio: exercise }), {
    onSuccess: () => queryClient.refetchQueries("workouts"),
  });

  async function saveCardioWorkout(exercise: Cardio) {
    if (isSubmitDisabled) {
      return;
    }

    setIsSubmitDisabled(true);

    Swal.fire({
      title: "Cardio",
      text: `Você quer marcar um cardio de ${returnNameInPortuguese(exercise)}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.loading("Enviando dados", { toastId: "loading" });
        try {
          await cardioWorkoutMutation.mutateAsync(exercise);
          toast.dismiss("loading");
          toast.success("Treino salvo com sucesso!");
          setIsSubmitDisabled(false);
        }
        catch (error) {
          toast.dismiss("loading");
          toast.error("Houve um erro ao tentar salvar seu treino!");
          setIsSubmitDisabled(false);
        }
      }
      else {
        setIsSubmitDisabled(false);
      }
    });
  }

  function returnNameInPortuguese(name: Cardio) {
    if (name === Cardio.CYCLING) {
      return "Bike";
    }
    if (name === Cardio.SWIMMING) {
      return "Natação";
    }
    if (name === Cardio.RUNNING) {
      return "Corrida";
    }
  }

  return (
    <Container>
      <div
        onClick={() => {
          saveCardioWorkout(Cardio.CYCLING);
        }}
      >
        bike
      </div>
      <div
        onClick={() => {
          saveCardioWorkout(Cardio.SWIMMING);
        }}
      >
        natação
      </div>
      <div
        onClick={() => {
          saveCardioWorkout(Cardio.RUNNING);
        }}
      >
        corrida
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  column-gap: 12px;
  width: fit-content;
  margin-bottom: 14px;

  div {
    width: 59px;
    height: 56px;
    background-color: rgba(255, 255, 255, 0.92);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 11px;
    text-align: center;
    color: #757575;
  }
`;
