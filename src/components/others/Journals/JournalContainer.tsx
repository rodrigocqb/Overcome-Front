import dayjs from "dayjs";
import { QueryClient } from "react-query";
import styled from "styled-components";
import { Journal } from "types/journalTypes";
import JournalComponent from "./JournalComponent";

export default function JournalContainer({
  journals,
  queryClient
}: {
  journals: Journal[];
  queryClient: QueryClient
}) {
  return (
    <Container>
      {journals.map((value) => (
        <JournalComponent
          key={value.id}
          id={value.id}
          date={dayjs(value.createdAt).format("DD/MM/YY")}
          text={value.text}
          queryClient = {queryClient}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 193px;
  height: 328px;
  background-color: #e1dcd6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 9px 4px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
