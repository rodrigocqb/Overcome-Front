import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { postObjective, putObjective } from "services/objectiveServices";
import styled from "styled-components";
import background from "../../../assets/objectiveForm/objectiveFormBgOpacity.png";
import mainBackground from "../../../assets/objectiveForm/objectiveFormBg.png";
import Header from "../Header";
import Footer from "../Footer";

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
      return putObjective({
        title: form.title,
        currentWeight: form.currentWeight * 10,
        goalWeight: form.goalWeight * 10,
      });
    }
    return postObjective({
      title: form.title,
      currentWeight: form.currentWeight * 10,
      goalWeight: form.goalWeight * 10,
    });
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
      await objectiveMutation.mutateAsync();
      toast.dismiss("loading");
      toast.success("Objetivo atualizado com sucesso!");
      setIsSubmitDisabled(false);
      setShowForm(false);
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Houve um erro ao tentar atualizar seu objetivo!");
      setIsSubmitDisabled(false);
    }
  }

  return (
    <Container>
      <Header />
      <MainSection>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <p>Qual o seu principal objetivo?</p>
            <input
              name="title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange({ name: e.target.name, value: e.target.value })
              }
              type="text"
              value={form.title}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Insira o seu peso atual</p>
            <input
              name="currentWeight"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange({ name: e.target.name, value: e.target.value })
              }
              type="number"
              step="0.1"
              value={form.currentWeight}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Insira o seu peso desejado</p>
            <input
              name="goalWeight"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange({ name: e.target.name, value: e.target.value })
              }
              type="number"
              step="0.1"
              value={form.goalWeight}
            />
          </InputWrapper>
          <SubmitButton>ATUALIZAR OBJETIVO</SubmitButton>
        </Form>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(100vh - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBackground});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 286px;
  margin-bottom: 22px;

  p {
    font-weight: 500;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
  }

  input {
    width: 100%;
    height: 45px;
    background: rgba(172, 164, 153, 0.66);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 23.5px;
    color: #ffffff;
    margin-top: 14px;
    border: 0px;
    outline: none;
    padding: 0 24px;
    font-weight: 700;
    font-size: 15px;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  border: none;
  font-weight: 500;
  width: 286px;
  height: 45px;
  background: rgba(168, 72, 47, 0.78);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23.5px;
  color: #ffffff;
  &:hover {
    filter: brightness(0.8);
  }
`;
