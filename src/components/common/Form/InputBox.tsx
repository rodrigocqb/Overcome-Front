import { useState } from "react";
import styled from "styled-components";
import { IoMdAlert } from "react-icons/io";

export type InputBoxProps = {
  name: string;
  placeholder: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  height?: string;
  hasCheckBox?: boolean;
  hasIcon?: boolean | JSX.Element;
  regex?: RegExp;
  required?: boolean;
  step?: string;
};
export default function InputBox({
  data: {
    name,
    placeholder,
    type,
    onChange,
    value,
    height = "60px",
    step,
    required,
  },
}: {
  data: InputBoxProps;
}) {

  return (
    <Container height={height}>
      <input
        name={name}
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        step={step}
      />
    </Container>
  );
}

const Container = styled.div<{ height: string }>`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: ${({ height }) => height};
  }
  input {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 23.5px;
    width: 236px;
    height: 45px;
    padding: 0px 24px;
    background-color: transparent;
    border: 1px solid #ffffff;
  }
  input::placeholder {
    color: #ffffff;
  }
`;
