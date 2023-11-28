import { css } from 'styled-components';
// import { searchIcon } from '../../constants/constants';

const searchStyle = {
  searchInput: css`
    font-size: 16px;
    line-height: 1.5;
    border: none;
    background: #FFFFFF;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
    background-repeat: no-repeat;
    background-position: 10px 10px;
    background-size: 20px 20px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
    border-radius: 5px;
    width: 300px;
    max-height: 45px;
    padding: .5em 1em .5em 2.5em;

    &::placeholder{
      color: #838D99;
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 4px 10px 0 rgba(0,0,0,0.16);
    }
  `
};

export default searchStyle;
