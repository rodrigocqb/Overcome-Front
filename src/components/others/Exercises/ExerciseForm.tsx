import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { postExercise } from "services/exerciseServices";
import styled from "styled-components";
import { Form, InputWrapper, SubmitButton } from "../Objective/ObjectiveForm";

export default function ExerciseForm() {
  const [form, setForm] = useState({
    name: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const exerciseMutation = useMutation(() => {
    return postExercise(form);
  });

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
      setIsSubmitDisabled(false);
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Esse exercício já existe no banco de dados!");
      setIsSubmitDisabled(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}

const Button = styled(SubmitButton)`
  margin-top: 9px;
`;
