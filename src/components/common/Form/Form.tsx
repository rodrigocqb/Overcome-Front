import InputBox, { InputBoxProps } from "components/common/Form/InputBox";
import SubmitButton from "components/common/Form/SubmitButton";
import styled from "styled-components";

export default function Form({
  inputs,
  handleSubmit,
  isSubmitDisabled,
  submitButtonText,
}: {
  inputs: InputBoxProps[];
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  isSubmitDisabled: boolean;
  submitButtonText: string;
}) {
  return (
    <Container
      action=""
      onSubmit={handleSubmit}
    >
      {inputs.map((inputData, index) => {
        return (
          <InputBox
            key={index}
            data={inputData}
          />
        );
      })}

      <SubmitButton
        disabled={isSubmitDisabled}
      >
        {submitButtonText}{" "}
      </SubmitButton>
    </Container>
  );
}

const Container = styled.form`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 17px;

    width: 100%;
    max-width: 500px;
    text-align: center;
  }
`;
