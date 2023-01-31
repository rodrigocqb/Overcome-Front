import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import exerciseClicked from "../../assets/footer/exerciseClicked.svg";
import exerciseUnclicked from "../../assets/footer/exerciseUnclicked.svg";
import sheetClicked from "../../assets/footer/sheetClicked.svg";
import sheetUnclicked from "../../assets/footer/sheetUnclicked.svg";
import journalClicked from "../../assets/footer/journalClicked.svg";
import journalUnclicked from "../../assets/footer/journalUnclicked.svg";

export default function Footer() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <Container>
      <IconWrapper
        isCurrentPage={path === "/exercises"}
        onClick={() => {
          navigate("/exercises");
        }}
      >
        <img
          src={path === "/exercises" ? exerciseClicked : exerciseUnclicked}
          alt="exercises"
        />
      </IconWrapper>
      <IconWrapper
        isCurrentPage={path === "/sheets"}
        onClick={() => {
          navigate("/sheets");
        }}
      >
        <img
          src={
            path === "/sheets" || path === "/" ? sheetClicked : sheetUnclicked
          }
          alt="sheets"
        />
      </IconWrapper>
      <IconWrapper
        isCurrentPage={path === "/journals"}
        onClick={() => {
          navigate("/journals");
        }}
      >
        <img
          src={path === "/journals" ? journalClicked : journalUnclicked}
          alt="journals"
        />
      </IconWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3px;
  width: 100vw;
  height: 113px;

  div:first-child {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const IconWrapper = styled.div<{ isCurrentPage: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 30px;
  box-shadow: ${(props) =>
    props.isCurrentPage ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""};

  img {
    width: 70px;
    height: 70px;
  }
`;
