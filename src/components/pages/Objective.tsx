import Header from "components/others/Header";
import ObjectiveComponent from "components/others/Objective/ObjectiveComponent";
import ObjectiveForm from "components/others/Objective/ObjectiveForm";
import { useState } from "react";
import styled from "styled-components";
import background from "../../assets/objective/objectiveblur.png";
import mainBackground from "../../assets/objective/objectivebackground.png";
import Footer from "components/others/Footer";

export default function Objective({
  hasObjective = true,
}: {
  hasObjective?: boolean;
}) {
  const [showForm, setShowForm] = useState(!hasObjective);
  const [isNewUser, setIsNewUser] = useState(!hasObjective);

  return (
    <>
      {showForm ? (
        <ObjectiveForm
          setShowForm={setShowForm}
          isNewUser={isNewUser}
        />
      ) : (
        <Container>
          <Header />
          <MainSection>
            <ObjectiveComponent
              setShowForm={setShowForm}
              setIsNewUser={setIsNewUser}
            />
          </MainSection>
          <Footer />
        </Container>
      )}
    </>
  );
}

const Container = styled.main`
  position: relative;
  height: var(--doc-height);
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(var(--doc-height) - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBackground});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
