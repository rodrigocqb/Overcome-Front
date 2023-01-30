import styled from "styled-components";
import title from "../../../assets/overcome.svg";

export default function TitleImage() {
  return (
    <Title
      src={title}
      alt="OVERCOME"
    />
  );
}

const Title = styled.img`
  font-size: 60px;
  margin-bottom: 10px;
`;
