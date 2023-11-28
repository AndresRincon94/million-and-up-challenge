import { css } from 'styled-components';

const marketStyle = {
  header: css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  rightHeader: css`
    align-items: center;
    display: flex;
    gap: 10px;
  `,
  cardButton: css`
    background: none;
    border: none;
    cursor: pointer;
    width: min-content;
  `
};

export default marketStyle;
