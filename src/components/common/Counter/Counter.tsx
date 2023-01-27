import { useEffect } from "react";
import styled from "styled-components";

import { useAppContext } from "../../../contexts/AppContext";
import Blur from "../Dummy/Blur";

export default function Counter() {
  const { counter, setCounter } = useAppContext();

  const { doThisWhenOver = () => {}, initialValue = 5000, tick = 2000 } = counter;

  useEffect(() => {
    if (initialValue > 0) {
      const interval = setInterval(() => {
        setCounter((old) => {
          return { ...old, initialValue: Math.max((old as { initialValue: number }).initialValue - tick, 0) };
        });
      }, tick);

      return () => {
        clearInterval(interval);
      };
    }

    if (initialValue === 0) {
      setCounter((old) => {
        return { ...old, show: false };
      });
      doThisWhenOver();
    }
  }, [doThisWhenOver, initialValue, setCounter, tick]);

  return (
    <>
      <Blur />

      <Container>{initialValue / 1000}</Container>
    </>
  );
}

const Container = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 21;

    font-family: "Arial";
    font-size: 30vw;
    width: 90vw;
    height: fit-content;
    padding: 15px;
  }
`;
