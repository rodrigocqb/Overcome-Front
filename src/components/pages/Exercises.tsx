import LoadingPlaceholder from "components/others/LoadingPlaceholder";
import { useQuery } from "react-query";
import { getExercises } from "services/exerciseServices";

export default function Exercises() {
  const { data, isLoading } = useQuery("exercises", getExercises, {
    retry: false,
  });

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  return <></>;
}