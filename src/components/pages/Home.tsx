import styled from "styled-components";

export default function Home() {
  return <Container></Container>;
}

const Container = styled.div`
  flex-direction: column;

  gap: 20px;

  img {
    width: 100px;
  }
  img:hover {
    cursor: pointer;
  }
`;
