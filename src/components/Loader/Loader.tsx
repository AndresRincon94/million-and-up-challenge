import styled from "styled-components"
import loaderStyle from "./Loader.style";

const LoaderWrapper = styled.div`${loaderStyle.wrapper}`;
const LoaderComponent = styled.span`${loaderStyle.loader}`;

/**
 * Render the Loader component
 */
function Loader() {
  return (
    <LoaderWrapper aria-label="loader">
      <LoaderComponent />
    </LoaderWrapper>
  )
}

export default Loader;
