import { AxiosError, HttpStatusCode } from "axios";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import { useQuery } from "react-query";
import { getObjective } from "services/objectiveServices";
import styled from "styled-components";
import Objective from "./Objective";

export default function Home() {
  const { data, isLoading, error } = useQuery("objectives", getObjective, {
    retry: false,
    onError: (err: AxiosError) => err,
  });

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  if (error?.response?.status === HttpStatusCode.NotFound) {
    return <Objective hasObjective={false} />;
  }

  return <Container></Container>; //TODO: Redirect to Sheets Page
}

const Container = styled.main``;
