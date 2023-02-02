import { QueryClient } from "react-query";
import styled from "styled-components";
import { SheetWithExercises } from "types/sheetTypes";
import SheetWrapper from "./SheetWrapper";

export default function SheetsContainer({
  sheets,
  queryClient,
}: {
  sheets: SheetWithExercises[] | undefined;
  queryClient: QueryClient;
}) {
  return (
    <Container>
      {sheets?.map((value) => (
        <SheetWrapper
          key={value.id}
          id={value.id}
          title={value.title}
          createdAt={value.createdAt}
          queryClient={queryClient}
          data={value}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 28px;
  width: 290px;
  height: 328px;
  background-color: #b5aea4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  padding: 9px 5px;
`;
