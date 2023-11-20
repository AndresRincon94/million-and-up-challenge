import { css } from "styled-components";

const paginationStyle = {
  header: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  leftHeader: css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  limit: css`
    border-radius: 3px;
    display: inline-block;
    margin: 0 8px;
    padding: 5px;
    vertical-align: middle;
    width: 70px;
  `,
  footer: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  wrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  `,
  item: css`
    & > button,
    & > span {
      position: relative;
      float: left;
      padding: 6px 12px;
      margin-left: -1px;
      line-height: 1.5;
      color: #0e406b;
      text-decoration: none;
      background-color: #fff;
      border: 1px solid #ddd;
      outline: 0;
    }
    & > button:hover,
    & > span:hover,
    & > button:focus,
    & > span:focus {
      z-index: 2;
      color: #1f3c57;
      background-color: #eee;
      border-color: #ddd;
    }
    & > button.active,
    & > span.active,
    & > button.active:hover,
    & > span.active:hover,
    & > button.active:focus,
    & > span.active:focus {
      z-index: 3;
      color: #fff;
      cursor: default;
      background-color: #0e406b;
      border-color: #0e406b;
    }
    & > span:disabled,
    & > span:disabled:hover,
    & > span:disabled:focus,
    & > button:disabled,
    & > button:disabled:hover,
    & > button:disabled:focus {
      color: #777;
      cursor: not-allowed;
      background-color: #fff;
      border-color: #ddd;
    }
  `,
};

export default paginationStyle;
