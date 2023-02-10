import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { JournalPageParams } from "types/journalTypes";
import background from "../../assets/journals/journalsBgOpacity.png";
import mainBackground from "../../assets/journals/journalsBg.png";
import styled from "styled-components";
import Header from "components/others/Header";
import Footer from "components/others/Footer";
import EditJournal from "components/others/JournalPage/EditJournal";
import ReadJournal from "components/others/JournalPage/ReadJournal";
import { JournalButton } from "components/others/Journals/JournalForm";
import { toast } from "react-toastify";
import { putUpdateJournal } from "services/journalServices";

export default function JournalPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const journalData: JournalPageParams = useLocation().state?.data;
  const [newText, setNewText] = useState(journalData?.text);

  const navigate = useNavigate();

  useEffect(() => {
    if (journalData === undefined) {
      navigate("/");
    }
  });

  async function editOrSave() {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    if (isSubmitDisabled) {
      return;
    }

    setIsSubmitDisabled(true);
    toast.loading("Enviando dados", { toastId: "loading" });

    try {
      await putUpdateJournal({ id: journalData.id, text: newText });
      toast.dismiss("loading");
      toast.success("Diário atualizado com sucesso!");
      setIsSubmitDisabled(false);
      setIsEditing(false);
    }
    catch (error) {
      toast.dismiss("loading");
      toast.error("Houve um erro ao tentar atualizar seu diário!");
      setIsSubmitDisabled(false);
    }
  }

  return (
    <Container>
      <Header />
      <MainSection>
        <Wrapper>
          <Title>DIÁRIO</Title>
          <TextContainer>
            <h2>{journalData.date}</h2>
            {isEditing ? (
              <EditJournal
                newText={newText}
                setNewText={setNewText}
              />
            ) : (
              <ReadJournal text={newText} />
            )}
          </TextContainer>
          <EditOrSaveButton
            isEditing={isEditing}
            onClick={editOrSave}
          >
            {isEditing ? "SALVAR" : "EDITAR"}
          </EditOrSaveButton>
        </Wrapper>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  height: var(--doc-height);
  justify-content: center;
  background-color: #e4e4e4;
  background-image: url(${background});
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(100vh - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
  background-image: url(${mainBackground});
  background-size: 100%;
  background-position: left 0 top -76px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  width: 100%;
  color: #ffffff;
  margin-top: 70px;
  text-align: center;
  width: 258px;
  margin-bottom: 21px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  min-height: 400px;
`;

const TextContainer = styled.div`
  width: 295px;
  height: 328px;
  background-color: #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 13px 20px;
  color: #757575;
  margin-bottom: 10px;

  h2 {
    width: 100%;
    text-align: end;
  }
`;

const EditOrSaveButton = styled(JournalButton)<{ isEditing: boolean }>`
  background-color: ${({ isEditing }) => (isEditing ? "#04455B" : "#777777")};
`;
