import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import { useUserContext } from "contexts/UserContext";
import { OAuthButtons } from "components/common/Dummy/OAuthButtons";
import { Title } from "components/common/Dummy/Title";
import { toast } from "react-toastify";
import useSignIn from "hooks/api/useSignIn";
import { UserData } from "types/userTypes";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useSignIn();

  const { getTokenWithGoogleOAuth } = useUserContext();

  const navigate = useNavigate();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);

    try {
      const userData: UserData = await signIn(form);
      toast.success("Login feito com sucesso!");

      localStorage.setItem("user", JSON.stringify(userData));

      setIsSubmitDisabled(false);

      navigate("/home");
    }
    catch (error) {
      toast.error("Houve um erro ao tentar fazer login!");
      setIsSubmitDisabled(false);
    }
  }

  const inputs: InputBoxProps[] = [
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
        submitButtonText={"Entre"}
      />

      <RedirectTo>
        <Link to={"/"}>Não tem uma conta ainda? Cadastre-se!</Link>
      </RedirectTo>

      <OAuthButtons>
        <GoogleButton
          onClick={async () => {
            await getTokenWithGoogleOAuth();
            navigate("/home");
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
    min-height: 100vh;

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
