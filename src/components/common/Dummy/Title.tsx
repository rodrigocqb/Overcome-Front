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
  width: 335px;
  height: 87px;
  margin-bottom: 10px;
`;
