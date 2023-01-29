import { AxiosError, HttpStatusCode } from "axios";
import { AiTwotoneEdit } from "react-icons/ai";
import { useQuery } from "react-query";
import { getObjective } from "services/objectiveServices";
import styled from "styled-components";
import LoadingPlaceholder from "../LoadingPlaceholder";

export default function ObjectiveComponent({
  setShowForm,
  setIsNewUser,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { data, isLoading, error } = useQuery("objectives", getObjective, {
    retry: false,
    onError: (err: AxiosError) => err,
  });

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  if (error?.response?.status === HttpStatusCode.NotFound) {
    setShowForm(true);
    setIsNewUser(true);
  }

  return (
    <Container>
      <div>
        <h1>Seu objetivo atual:</h1>
        <AiTwotoneEdit
          onClick={() => {
            setShowForm(true);
          }}
        />
        <ObjectiveWrapper>
          <h2>{data?.title}</h2>
          <p>Peso atual: {data?.currentWeight && data.currentWeight / 10}kg</p>
          <p>Sua meta: {data?.goalWeight && data.goalWeight / 10}kg</p>
        </ObjectiveWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  width: 80%;
  min-height: 200px;
  border-radius: 15px;
  align-items: initial;
  padding: 15px;
  position: relative;

  h1 {
    font-size: 20px;
    color: #303030;
    margin-bottom: 20px;
    font-weight: 700;
  }

  div {
    width: 100%;
    justify-content: initial;
    align-items: initial;
    flex-direction: column;
  }

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 25px;
  }
`;

const ObjectiveWrapper = styled.div`
  color: #303030;
  border: 2px solid #f2f2f2;
  width: 100%;
  border-radius: 5px;
  row-gap: 15px;
  padding: 10px;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;
