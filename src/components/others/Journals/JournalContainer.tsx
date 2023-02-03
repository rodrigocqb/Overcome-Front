import styled from "styled-components";
import { Journal } from "types/journalTypes";

export default function JournalContainer({
  journals,
}: {
  journals: Journal[];
}) {
  return <Container></Container>;
}

const Container = styled.div`
  width: 193px;
  height: 328px;
  background-color: #e1dcd6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 9px 4px;
`;
