import background from "../../assets/journals/journalsBgOpacity.png";
import mainBackground from "../../assets/journals/journalsBg.png";
import styled from "styled-components";
import Header from "components/others/Header";
import Footer from "components/others/Footer";
import { useQuery, useQueryClient } from "react-query";
import { getJournals } from "services/journalServices";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import JournalContainer from "components/others/Journals/JournalContainer";
import { ButtonWrapper, SpanWrapper } from "./Exercises";
import { useState } from "react";
import JournalForm from "components/others/Journals/JournalForm";

export default function Journals() {
  const [showForm, setShowForm] = useState(false);

  const { data, isLoading } = useQuery("journals", getJournals, {
    retry: false,
  });
  const queryClient = useQueryClient();

  if (isLoading) {
    return (
      <Container>
        <Header />
        <LoadingPlaceholder />
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <MainSection>
        <Wrapper>
          <Title>DIÁRIOS</Title>
          {data !== undefined && (
            <>
              {showForm ? (
                <JournalForm
                  queryClient={queryClient}
                  setShowForm={setShowForm}
                  journals={data}
                />
              ) : (
                <>
                  {data.length === 0 ? (
                    <SpanWrapper>
                      Você ainda não tem diários. Comece a escrever um.
                    </SpanWrapper>
                  ) : (
                    <JournalContainer
                      journals={data}
                      queryClient={queryClient}
                    />
                  )}
                  <ButtonSection
                    showForm={showForm}
                    onClick={() => setShowForm(!showForm)}
                  >
                    <div>+</div>
                    <p>novo diário</p>
                  </ButtonSection>
                </>
              )}
            </>
          )}
        </Wrapper>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: 100vh;
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

const ButtonSection = styled(ButtonWrapper)`
  margin-top: 21px;
  div {
    background-color: #6c9db2;
    margin-right: 7px;
  }
`;
