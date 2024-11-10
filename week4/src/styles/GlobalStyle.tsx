import { Global,css } from "@emotion/react";

export const globalStyle = css`
    a{
        text-decoration: none;
    }
    *{
        box-sizing: border-box;
    }

    html, body{
        //width: 37.5rem;
        overflow-x :  hidden;
    }

    #root, body, html {
    margin: 0;
    padding:0;

    font-size: 62.5%;
    }

    body{
        line-height: 1.5; //행간 거리 조절
    }

    ol, ul{
        list-style: none;
    }

    button {
        background: transparent;
        cursor: pointer;
        border: 0;
    }

    input {
        outline: none;
        border: none;
    }
`

const GlobalStyle = () => <Global styles={globalStyle}/>

export default GlobalStyle;