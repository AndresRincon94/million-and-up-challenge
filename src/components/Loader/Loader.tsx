import styled from "styled-components"
import loaderStyle from "./Loader.style";

const LoaderWrapper = styled.div`${loaderStyle.wrapper}`;
const LoaderComponent = styled.span`${loaderStyle.loader}`;

function Loader() {
  return (
    <LoaderWrapper>
      <LoaderComponent />
    </LoaderWrapper>
  )
}

export default Loader;
