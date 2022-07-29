import styled from "styled-components";

export const LoginContainer = styled.main`
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 52px 16px 71px;
    h5{
        font-weight: 500;
        line-height: 30px;
        margin: 0 0 13px;
    }
    .login-box{
        max-width: 412px;
        border-radius: 4px;
        background-color: var(--whiteFixed);
        padding: 44px 49px 44px 48px;
    }
    span{
        display: block;

    }
    .forgot-password{
        color: var(--grey2);
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        text-align: end;
        margin: 9px 0 21px;
    }
    .dont-have-account{
        text-align: center;
        margin: 24px auto;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
    }
`