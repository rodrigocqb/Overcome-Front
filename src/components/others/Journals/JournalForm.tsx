import dayjs from "dayjs";
import { useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { postJournal } from "services/journalServices";
import styled from "styled-components";
import { Journal } from "types/journalTypes";

type JournalFormParams = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  queryClient: QueryClient;
  journals: Journal[] | undefined;
};

export default function JournalForm({
  setShowForm,
  queryClient,
  journals,
}: JournalFormParams) {
  const [text, setText] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const today = dayjs().format("DD/MM/YY");
  const placeholderText = `Coloque aqui como você está se sentindo, seus anseios ou o que você preferir. 
Você pode falar do seu sono, 
como tem sido fazer exercícios 
ou da sua vida num geral :)`;

  const queryData = () => {
    if (journals === undefined) {
      return [];
    }
    else {
      return journals;
    }
  };

  const postJournalMutation = useMutation(() => postJournal(text), {
    onSuccess: (data) => {
      queryClient.setQueryData("journals", [...queryData(), data]);
    },
  });

  function handleChange(value: string) {
    setText(value);
  }

  async function saveJournal() {
    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);
    toast.loading("Enviando dados", { toastId: "loading" });

    try {
      await postJournalMutation.mutateAsync();
      toast.dismiss("loading");
      toast.success("Diário salvo com sucesso!");
      setShowForm((old) => !old);
      setIsSubmitDisabled(false);
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Houve um erro ao tentar salvar seu diário!");
      setIsSubmitDisabled(false);
    }
  }

  return (
    <>
      <Container>
        <DateWrapper>{today}</DateWrapper>
        <TextAreaWrapper
          name="text"
          placeholder={placeholderText}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(e.target.value)
          }
        />
      </Container>
      <JournalButton onClick={saveJournal} >SALVAR</JournalButton>
    </>
  );
}

const Container = styled.div`
  width: 295px;
  height: 328px;
  background-color: #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 13px 20px;
  color: #757575;
  margin-bottom: 10px;
`;

const DateWrapper = styled.h2`
  width: 100%;
  text-align: end;
`;

export const TextAreaWrapper = styled.textarea`
  padding: 10px;
  margin-top: 35px;
  width: 100%;
  height: 235px;
  word-break: break-word;
  outline: none;
  font-family: "Montserrat";
  font-weight: 600;
  border: 1px solid #e1dcd6;
  background-color: transparent;
  resize: none;
  border-radius: 12px;
  color: #757575;
  font-size: 16px;
`;

export const JournalButton = styled.div`
  width: 184px;
  height: 45px;
  background-color: #04455b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 23.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`;
