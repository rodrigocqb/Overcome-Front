import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postSheet } from "services/sheetServices";
import styled from "styled-components";
import { Button, StyledForm } from "../Exercises/ExerciseForm";
import { InputWrapper } from "../Objective/ObjectiveForm";

export default function SheetForm() {
  const [form, setForm] = useState({
    title: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const createSheetMutation = useMutation(() => {
    return postSheet(form);
  });

  const navigate = useNavigate();

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
      const sheet = await createSheetMutation.mutateAsync();
      toast.dismiss("loading");
      navigate(`/sheets/${sheet.id}`, { state: { title: sheet.title } });
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Houve um erro ao tentar criar sua ficha!");
      setIsSubmitDisabled(false);
    }
  }

  return (
    <SheetFormContainer onSubmit={handleSubmit}>
      <InputWrapper>
        <p>Nome da ficha</p>
        <input
          name="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
          value={form.title}
          type="text"
        />
      </InputWrapper>
      <Button>ADICIONAR EXERCÍCIOS</Button>
    </SheetFormContainer>
  );
}

const SheetFormContainer = styled(StyledForm)`
  margin-bottom: 150px;
`;