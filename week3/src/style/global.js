// styles/global.js

import { css } from "@emotion/react";

const GlobalStyle = css`
  /* 기본 박스 스타일 초기화 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* HTML, Body 기본 스타일 */
  html, body {
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  /* 링크 기본 스타일 */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  /* 이미지의 기본 스타일 */
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }

  /* 스크롤 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }

  /* 폼 요소 기본 스타일 */
  button,
  input,
  select,
  textarea {
    font: inherit;
    border: none;
    background: none;
  }

  /* 버튼 기본 스타일 */
  button {
    cursor: pointer;
  }

  /* 목록 스타일 초기화 */
  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
