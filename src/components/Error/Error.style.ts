import { css } from 'styled-components';

const errorStyle = {
  wrapper: css`
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    height: 100vh;
    width; 100vw;
  `,
  message: css`
    text-align: center;
    width: 100%;
  `,
  link: css`
    background-color: #ccc;
    border: none;
    border-radius: 3px;
    color: #000;
    cursor: pointer;
    display: inline-block;
    padding: 10px 14px;
    text-decoration: none;

    &:hover {
      box-shadow: 0px 0px 5px -2px #888;
    }
  `
};

export default errorStyle;
