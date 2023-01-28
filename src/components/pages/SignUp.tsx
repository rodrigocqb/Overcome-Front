import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { useUserContext } from "contexts/UserContext";
import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { OAuthButtons } from "components/common/Dummy/OAuthButtons";
import { Title } from "components/common/Dummy/Title";
import { toast } from "react-toastify";
import useSignUp from "hooks/api/useSignUp";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signUp } = useSignUp();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const { getTokenWithGoogleOAuth, userData } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      return navigate("/");
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);

    try {
      await signUp(form);
      toast.success("Cadastro feito com sucesso!");

      setIsSubmitDisabled(false);

      navigate("/sign-in");
    }
    catch (error) {
      toast.error("Houve um erro ao tentar se cadastrar!");
      setIsSubmitDisabled(false);
    }
  }

  const inputs: InputBoxProps[] = [
    {
      name: "name",
      placeholder: "Nome",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: e.target.value });
      },
      value: form.name,
      hasIcon: true,
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "E-mail",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, email: e.target.value });
      },
      value: form.email,
      hasIcon: true,
      type: "email",
      height: "60px",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Senha",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, password: e.target.value });
      },
      value: form.password,
      hasCheckBox: true,
      hasIcon: true,
      height: "60px",
      required: true,
    },
  ];

  return (
    <Container>
      <Title>Overcome</Title>
      <Form
        inputs={inputs}
        handleSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
        submitButtonText={"Cadastre-se"}
      />

      <RedirectTo>
        <Link to={"/sign-in"}>Já tem uma conta? Faça login!</Link>
      </RedirectTo>

      <OAuthButtons>
        <GoogleButton
          onClick={async () => {
            await getTokenWithGoogleOAuth();
            toast.success("Login feito com sucesso!");
            navigate("/");
          }}
        ></GoogleButton>
      </OAuthButtons>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    width: calc(100vw - (100vw - 100%));
    height: 100vh;

    padding: 20px;

    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const RedirectTo = styled.div`
  & {
    height: fit-content;
    padding-top: 20px;
  }
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-decoration-line: underline;
  }
`;
