import ObjectiveComponent from "components/others/Objective/ObjectiveComponent";
import ObjectiveForm from "components/others/Objective/ObjectiveForm";
import { useState } from "react";
import styled from "styled-components";

export default function Objective({
  hasObjective = true,
}: {
  hasObjective?: boolean;
}) {
  const [showForm, setShowForm] = useState(!hasObjective);
  const [isNewUser, setIsNewUser] = useState(!hasObjective);

  return (
    <Container>
      {showForm ? (
        <ObjectiveForm
          setShowForm={setShowForm}
          isNewUser={isNewUser}
        />
      ) : (
        <ObjectiveComponent
          setShowForm={setShowForm}
          setIsNewUser={setIsNewUser}
        />
      )}
    </Container>
  );
}

const Container = styled.main`
  height: 90vh;
  justify-content: center;
  background-color: #A72E36;
`;
