import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { postExercise } from "services/exerciseServices";

export default function ExerciseForm() {
  const [form, setForm] = useState({
    name: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const exerciseMutation = useMutation(() => {
    return postExercise(form);
  });

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
      toast.error("Houve um erro ao tentar salvar o exercício!");
      setIsSubmitDisabled(false);
    }
  }

  const inputs: InputBoxProps[] = [
    {
      name: "name",
      placeholder: "Nome do exercício",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: e.target.value });
      },
      value: form.name,
      type: "text",
      height: "60px",
    },
  ];

  return (
    <Form
      inputs={inputs}
      handleSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      submitButtonText={"Salvar exercício"}
    />
  );
}
