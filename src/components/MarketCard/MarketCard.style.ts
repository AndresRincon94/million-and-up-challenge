import { css } from 'styled-components';

const cardStyle = {
  wrapper: css`
    background; #eee;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-width: 230px;
    transition: 0.2s;
    width: 18%;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    }
  `,
  header: css`
    background: #000963;
    color: #fff;
    margin: 0;
    padding: 10px;
    width: 100%;
  `,
  body: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
  `
};

export default cardStyle;
