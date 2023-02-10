import styled from "styled-components";
import background from "../../assets/myWorkouts/myWorkoutsBgOpacity.png";
import mainBackground from "../../assets/myWorkouts/myWorkoutsBg.png";
import Header from "components/others/Header";
import Footer from "components/others/Footer";
import { getWorkouts } from "services/workoutServices";
import { useQuery, useQueryClient } from "react-query";
import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import WorkoutHistory from "components/others/MyWorkouts/WorkoutHistory";
import CardioButtons from "components/others/MyWorkouts/CardioButtons";

export default function MyWorkouts() {
  const { data, isLoading } = useQuery("workouts", getWorkouts, {
    retry: false,
  });
  const queryClient = useQueryClient();

  if (isLoading) {
    return (
      <Container>
        <Header />
        <LoadingPlaceholder />
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <MainSection>
        <Wrapper>
          <Title>MEUS TREINOS</Title>
          <CardioButtons queryClient={queryClient} />
          {data !== undefined && <WorkoutHistory data={data} />}
        </Wrapper>
      </MainSection>
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  height: var(--doc-height);
  justify-content: center;
  background-color: #e4e4e4;
  background-image: url(${background});
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
`;

const MainSection = styled.section`
  margin-top: 76px;
  width: 100%;
  height: calc(100vh - 189px);
  border-radius: 51px 51px 36px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e4e4e4;
  background-image: url(${mainBackground});
  background-size: 100%;
  background-position: left 0 top -76px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  width: 100%;
  color: #ffffff;
  margin-top: 50px;
  text-align: center;
  width: 258px;
  margin-bottom: 21px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  min-height: 400px;
`;
