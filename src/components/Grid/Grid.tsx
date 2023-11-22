import styled from "styled-components"
import gridStyle from "./Grid.style";
import ICard from "./IGrid";

const GridWrapper = styled.div`${gridStyle.wrapper}`;

function Grid({
  children,
}: ICard) {
  return (
    <GridWrapper id="Grid">
      {children}
    </GridWrapper>
  )
}

export default Grid;
