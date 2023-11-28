import { css } from 'styled-components';
import { rightArrowIcon } from '../../constants/constants';

const backButtonStyle = {
  button: css`
    background-color: #fff;
    background-image: url(${rightArrowIcon});
    background-position: 7px 7px;
    background-repeat: no-repeat;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    padding: 6px;
    vertical-align: top;
    width: 40px;

    &:hover {
      box-shadow: 0px 0px 5px -2px #888;
    }
  `
};

export default backButtonStyle;
