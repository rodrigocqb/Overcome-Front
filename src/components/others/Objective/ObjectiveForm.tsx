import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { postObjective, putObjective } from "services/objectiveServices";

type ObjectiveFormParams = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  isNewUser: boolean;
};

export default function ObjectiveForm({
  setShowForm,
  isNewUser,
}: ObjectiveFormParams) {
  const [form, setForm] = useState({
    title: "",
    currentWeight: 0,
    goalWeight: 0,
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const objectiveMutation = useMutation(() => {
    if (!isNewUser) {
      return putObjective(form);
    }
    return postObjective(form);
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);
    toast.loading("Enviando dados", { toastId: "loading" });

    try {
      await objectiveMutation.mutateAsync();
      toast.dismiss("loading");
      toast.success("Objetivo atualizado com sucesso!");
      setIsSubmitDisabled(false);
      setShowForm(false);
    }
    catch (error) {
      toast.error("Houve um erro ao tentar atualizar seu objetivo!");
      setIsSubmitDisabled(false);
    }
  }

  const inputs: InputBoxProps[] = [
    {
      name: "title",
      placeholder: "Qual o seu principal objetivo?",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, title: e.target.value });
      },
      value: form.title,
      type: "text",
      height: "60px",
    },
    {
      name: "currentWeight",
      type: "number",
      placeholder: "Insira o seu peso atual",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, currentWeight: Number(e.target.value) * 10 });
      },
      height: "60px",
      step: "0.1",
    },
    {
      name: "goalWeight",
      type: "number",
      placeholder: "Insira o seu peso desejado",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, goalWeight: Number(e.target.value) * 10 });
      },
      height: "60px",
      step: "0.1",
    },
  ];

  return (
    <Form
      inputs={inputs}
      handleSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      submitButtonText={"Atualizar objetivo"}
    />
  );
}
