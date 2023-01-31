import dayjs from "dayjs";
import styled from "styled-components";
import { SheetWithExercises } from "types/sheetTypes";

export default function SheetsContainer({
  sheets,
}: {
  sheets: SheetWithExercises[] | undefined;
}) {
  return (
    <Container>
      {sheets?.map((value) => (
        <SheetWrapper
          key={value.id}
          id={String(value.id)}
        >
          <SheetTitle>{value.title}</SheetTitle>
          <SheetDate><p>{dayjs(value.createdAt).format("DD/MM/YY")}</p></SheetDate>
          <DeleteButton>X</DeleteButton>
        </SheetWrapper>
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

const SheetWrapper = styled.div`
  width: 280px;
  height: 52px;
  background-color: rgba(172, 164, 153, 0.66);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 15px 17px 6px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const SheetTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  max-width: 211px;
  text-overflow: ellipsis;
`;

const SheetDate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-weight: 400;
  font-size: 10px;
  color: #ffffff;
`;

const DeleteButton = styled.div`
    color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-weight: 600;
font-size: 14px;
position: absolute;
top: 16px;
right: 17px;
`;