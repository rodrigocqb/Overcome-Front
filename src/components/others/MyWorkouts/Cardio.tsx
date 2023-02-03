import { QueryClient } from "react-query";
import styled from "styled-components";

export default function Cardio({ queryClient }: { queryClient: QueryClient }) {
  return (
    <Container>
      <div>bike</div>
      <div>natação</div>
      <div>corrida</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  column-gap: 12px;
  width: fit-content;
  margin-bottom: 14px;

  div {
    width: 59px;
    height: 56px;
    background-color: rgba(255, 255, 255, 0.92);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 11px;
    text-align: center;
    color: #757575;
  }
`;
