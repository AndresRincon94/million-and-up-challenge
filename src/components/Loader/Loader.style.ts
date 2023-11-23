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
    width: 100%;
    display: flex;
  `,
  loader: css`
    width: 48px;
    height: 48px;
    border: 3px dotted #000;
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
    margin: auto;

    ${rotationFrames}

    &::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px dotted #FF3D00;
      border-style: solid solid dotted;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      animation: rotationBack 1s linear infinite;
      transform-origin: center center;
    }
  `
};

export default loaderStyle;
