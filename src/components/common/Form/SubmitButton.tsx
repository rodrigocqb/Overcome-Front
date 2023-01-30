import styled, { StyledProps } from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import React from "react";

export default function SubmitButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Container onClick={onClick}>
      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>{children}</>
      )}
    </Container>
  );
}

const Container = styled.button`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 33px;
    border: none;
    border-radius: 23.5px;
    font-weight: 700;
    width: 236px;
    height: 45px;
    background: #ffffff;
    color: #614d4f;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
