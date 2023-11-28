import React from 'react';
import styled from 'styled-components';

import gridStyle from './Grid.style';
import IGrid from './IGrid';

const GridWrapper = styled.div`${gridStyle.wrapper}`;

/**
 * Render the Grid
 *
 * @param IGrid - Grid props 
 * @param IGrid.children - React node to wrap in the grid
 */
function Grid({
  children,
}: IGrid) {
  return (
    <GridWrapper aria-label="grid">
      {children}
    </GridWrapper>
  );
}

export default Grid;
