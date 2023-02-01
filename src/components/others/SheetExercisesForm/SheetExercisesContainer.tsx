import { useState } from "react";
import styled from "styled-components";
import { SheetExerciseBody } from "types/sheetTypes";
import Searchbar from "./Searchbar";

export default function SheetExercisesContainer({ name }: { name: string }) {
  const [sheetExercises, setSheetExercises] = useState<SheetExerciseBody[]>([]);

  return (
    <Container>
      <SheetName>{name}</SheetName>
      <Searchbar />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 249px);
  width: 326px;
  background-color: #85b6cb;
  border-radius: 35px;
  margin-bottom: 22px;
  margin-top: 38px;
  padding: 26px 14px 27px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SheetName = styled.h1`
  font-weight: 900;
  font-size: 17px;
  color: #ffffff;
`;
