import styled from "styled-components";

export const RegisterContainer = styled.main`
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey8);
    padding: 46px 16px 96px;

    button{
        margin: 28px 0 0;
        padding: 12px 0;
    }
    label{
        margin: 24px 0 8px;
    }
    h5{
        font-weight: 500;
        line-height: 30px;
        margin: 0 0 13px;
    }
    .register-box{
        width: 100%;
        max-width: 412px;
        border-radius: 4px;
        background-color: var(--whiteFixed);
        padding: 44px 49px 44px 48px;
        @media (max-width: 500px) {
            padding: 44px 28px;
            
        }
    }
    .info{
        margin: 28px 0 0px;
        color: #000;
    }
    span{
        display: block;

    }


`