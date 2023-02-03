import styled from "styled-components";

export default function ReadJournal({ text }: {text: string}) {
  return <TextWrapper>{text}</TextWrapper>;
}

const TextWrapper = styled.div`
  padding: 10px;
  margin-top: 35px;
  width: 100%;
  height: 235px;
  word-break: break-word;
  color: #757575;
  white-space: pre-line;
`;