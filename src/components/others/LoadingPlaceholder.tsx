import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

export default function LoadingPlaceholder() {
  return (
    <LoaderContainer>
      <ColorRing
        visible={true}
        height="160"
        width="160"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
`;
