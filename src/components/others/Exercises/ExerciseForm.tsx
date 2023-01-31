import { useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { postExercise } from "services/exerciseServices";
import styled from "styled-components";
import { Exercise } from "types/exerciseTypes";
import { Form, InputWrapper, SubmitButton } from "../Objective/ObjectiveForm";

export default function ExerciseForm({
  queryClient,
  exercises,
  setShowForm,
}: {
  queryClient: QueryClient;
  exercises: Exercise[] | undefined;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [form, setForm] = useState({
    name: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const queryData = () => {
    if (exercises === undefined) {
      return [];
    }
    else {
      return exercises;
    }
  };

  const exerciseMutation = useMutation(
    () => {
      return postExercise(form);
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData("exercises", [...queryData(), data]);
      },
    },
  );

  function handleChange({
    value,
    name,
  }: {
    value: string | number;
    name: string;
  }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);
    toast.loading("Enviando dados", { toastId: "loading" });

    try {
      await exerciseMutation.mutateAsync();
      toast.dismiss("loading");
      toast.success("Exercício salvo com sucesso!");
      setForm({ name: "" });
      setShowForm((old) => !old);
      setIsSubmitDisabled(false);
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Esse exercício já existe no banco de dados!");
      setForm({ name: "" });
      setIsSubmitDisabled(false);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <p>Nome do exercício</p>
        <input
          name="name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
          value={form.name}
          type="text"
        />
      </InputWrapper>
      <Button>SALVAR EXERCÍCIO</Button>
    </StyledForm>
  );
}

const Button = styled(SubmitButton)`
  margin-top: 9px;
`;

const StyledForm = styled(Form)`
  margin-top: 40px;
`;
