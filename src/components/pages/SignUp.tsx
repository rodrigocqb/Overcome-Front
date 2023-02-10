import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { useUserContext } from "contexts/UserContext";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleImage from "components/common/Dummy/Title";
import { toast } from "react-toastify";
import { postSignUp } from "services/userServices";
import { useMutation } from "react-query";
import background from "../../assets/background.png";
import { GoogleButton } from "components/common/Dummy/GoogleButton";
import google from "../../assets/google.svg";
import useToken from "hooks/useToken";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpMutation = useMutation(() => postSignUp(form));

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const { getTokenWithGoogleOAuth } = useUserContext();
  const token = useToken();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
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
      await signUpMutation.mutateAsync();
      toast.success("Cadastro feito com sucesso!");

      setIsSubmitDisabled(false);

      navigate("/sign-in");
    }
    catch (error) {
      toast.error("Uma conta com este email já existe!");
      setIsSubmitDisabled(false);
    }
  }

  const inputs: InputBoxProps[] = [
    {
      name: "name",
      placeholder: "nome",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: e.target.value });
      },
      value: form.name,
      type: "text",
      height: "45px",
      required: true,
    },
    {
      name: "email",
      placeholder: "e-mail",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, email: e.target.value });
      },
      value: form.email,
      type: "email",
      height: "45px",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "senha",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, password: e.target.value });
      },
      value: form.password,
      height: "45px",
      required: true,
    },
  ];

  return (
    <Container>
      <TitleImage />
      <Form
        inputs={inputs}
        handleSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
        submitButtonText={"cadastre-se"}
      />

      <RedirectTo>
        <Link to={"/sign-in"}>Já tem uma conta? Faça login!</Link>
      </RedirectTo>

      <GoogleButton
        onClick={async () => {
          await getTokenWithGoogleOAuth();
          toast.success("Login feito com sucesso!");
          navigate("/");
        }}
      >
        <img
          src={google}
          alt="google"
        />
        <p>Faça login com o Google</p>
      </GoogleButton>
    </Container>
  );
}

const Container = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100vw - (100vw - 100%));
    height: var(--doc-height);

    padding: 20px;

    font-weight: 700;
    font-size: 15px;
    color: #ffffff;

    background-image: url(${background});
    background-size: cover;
  }
`;

const RedirectTo = styled.div`
  & {
    height: fit-content;
    padding-top: 20px;
    text-align: center;
    width: 236px;
  }
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-decoration-line: underline;
  }
`;
