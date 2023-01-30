import { AxiosError, HttpStatusCode } from "axios";
import { useQuery } from "react-query";
import { getObjective } from "services/objectiveServices";
import styled from "styled-components";
import LoadingPlaceholder from "../LoadingPlaceholder";
import background from "../../../assets/objective/bodybackground.png";
import edit from "../../../assets/objective/polygon.svg";

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
        <TitleWrapper>
          <h1>objetivo</h1>
          <EditButton
            onClick={() => {
              setShowForm(true);
            }}
          >
            <img
              src={edit}
              alt="edit"
            />
          </EditButton>
        </TitleWrapper>
        <ObjectiveWrapper>
          <h2>{data?.title}</h2>
          <p>
            peso atual{" "}
            <span>{data?.currentWeight && data.currentWeight / 10}kg</span>
          </p>
          <p>
            meta <span>{data?.goalWeight && data.goalWeight / 10}kg</span>
          </p>
        </ObjectiveWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  width: 263px;
  height: 328px;
  align-items: initial;
  position: relative;
  text-align: center;

  h1 {
    font-weight: 300;
    font-size: 22px;
    color: #ffffff;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: initial;
    align-items: initial;
    flex-direction: column;
  }
`;

const ObjectiveWrapper = styled.div`
  color: #ffffff;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 19px;
    text-decoration: underline;
    margin-bottom: 44px;
  }

  p {
    font-size: 22px;
    margin-bottom: 27px;
    font-weight: 300;
  }

  span {
    font-size: 22px;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 42px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled.div`
  margin-left: 10px;
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;
