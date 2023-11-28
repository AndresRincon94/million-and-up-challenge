import { css } from 'styled-components';

const rotationFrames = css`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const loaderStyle = {
  wrapper: css`
    height: 90vh;
    display: flex;
    width: 100%;
  `,
  loader: css`
    width: 72px;
    height: 72px;
    border: 4px dotted #000;
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
    margin: auto;

    ${rotationFrames}

    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 4px dotted #ff3d00;
      border-style: solid solid dotted;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      animation: rotationBack 1s linear infinite;
      transform-origin: center center;
    }
  `,
};

export default loaderStyle;
