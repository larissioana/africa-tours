import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
     
       
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
        background:#dfdddd;
       
        
    }
    a{
        text-decoration: none;
        /* color:#e2dfdf; */
        font-family: 'Raleway', sans-serif;
    }
    h2,h3,p,h1{
        font-family: 'Raleway', sans-serif;
        color:#444141;
       
    }
    li{
        list-style: none;
    }
    p{
        font-size:clamp(.9rem,2vw,1rem);
    }
`