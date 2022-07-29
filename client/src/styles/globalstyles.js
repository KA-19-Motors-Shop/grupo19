import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
    }
    p{
        font-family: 'Inter', sans-serif;
    }
    button{
        cursor: pointer;
        font-family: 'Inter', sans-serif;
    }
    input, input::placeholder, label,textarea{
        font-family: 'Inter', sans-serif;
    }
    figcaption{
        display: none;
    }
    label,span{
        font-weight: 500;
        font-size: 14px;
        color: var(--grey2);
    }
    input::placeholder,textarea::placeholder{
        font-weight: 400;
        font-size: 16px;
        color: var(--grey2);
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Lexend', sans-serif;
        font-style: normal;
        color: var(--grey1);
    }
    h1{
        font-size: 44px;
        font-weight: 700;
    }
    h2{
        font-weight: 600;
        font-size: 36px;
    }
    h3{
        font-weight: 600;
        font-size: 32px;
    }
    h4{
        font-weight: 600;
        font-size: 28px;
    }
    h5{
        font-weight: 600;
        font-size: 24px;
    }
    h6{
        font-weight: 600;
        font-size: 20px;
    }

    h7{
        font-weight: 600;
        font-size: 16px;
    }
    a{
        text-decoration: none;
    }
    ul, li, figcaption{
        list-style: none;
    }
    :root{
        --brand1:#4529e6;
        --brand2:#5126ea;
        --brand3:#b0a6f0;
        --brand4:#edeafd;

        --grey0:#0b0d0d;
        --grey1:#212529;
        --grey2:#495057;
        --grey3:#868e96;
        --grey4:#ADB5BD;
        --grey5:#ced4da;
        --grey6:#dee2e6;
        --grey7:#e9ecef;
        --grey8:#f1f3f5;
        --grey9:#f8f9fa;
        --grey10:#fdfdfd;

        --whiteFixed:#ffffff;

        --alert1:#cd2b31;
        --alert2:#fdd8d8;
        --alert3:#ffe5e5;

        --sucess1:#18794e;
        --sucess2:#ccebd7;
        --sucess3:#ddf3e4;

        --random1:#e34d8c;
        --random2:#c04277;
        --random3:#7d2a4d;
        --random4:#7000ff;
        --random5:#6200e3;
        --random6:#36007d;
        --random7:#349974;
        --random8:#2a7d5f;
        --random9:#153d2e;
        --random10:#6100ff;
        --random11:#5700e3;
        --random12:#30007d;


    }
`
