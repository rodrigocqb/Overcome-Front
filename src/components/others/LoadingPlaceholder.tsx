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
        colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
      />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  background-color: transparent;
`;
