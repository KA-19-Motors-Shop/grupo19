import styled from "styled-components";

export const InputContainer = styled.div`
    display: inline-block;
    width: 100%;
    label{
        display: block;
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: var(--grey1);
        margin: 19px 0 8px;
    }
    textarea{
        width: 100%;
        resize: none;
        max-width: 100%;
        min-width: 100%;
        min-height: 80px;
        max-height: 140px;
        border-radius: 4px;
        color: var(--grey1);
        height: 80px;
        font-size: 16px;
        font-weight: 400;
        border: 1.5px solid var(--grey7);
        background-color: transparent;
        padding:12px 16px 24px ;
    }
    input{
        width: 100%;
        border-radius: 4px;
        color: var(--grey1);
        padding: 0 16px;
        height: 48px;
        line-height: 12px;
        border: 1.5px solid var(--grey7);
        background-color: transparent;
    }
    input:hover, textarea:hover{
        background-color: var(--grey8);
    }
    input::placeholder, textarea::placeholder{
        color: var(--grey3);
    }
    input:focus, textarea:focus{
        background-color: var(--grey9);
        outline: 1.5px solid var(--brand2);
        border: 1.5px solid var(--brand2);
    }

`