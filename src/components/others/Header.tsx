import styled from "styled-components";
import overcome from "../../assets/overcome.svg";

export default function Header() {
  return (
    <Container>
      <StyledTitle
        src={overcome}
        alt=""
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3px;
  width: 100vw;
  height: 76px;
`;

const StyledTitle = styled.img`
  width: 55%;
  height: 55%;
`;
