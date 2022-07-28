import styled from "styled-components";


export const FooterContainer = styled.footer`
    display: flex;
    height: 140px;
    background-color: var(--grey0);
    padding: 0 59px;
    align-items: center;
    justify-content: space-between;
    color: var(--whiteFixed);
    font-size: 14px;
    font-weight: 400;
    @media (max-width:630px) {
        flex-direction: column;
    padding: 0 19px;
        gap: 60px;
        height: 310px;
        justify-content: center;
    }
    svg{
        color: var(--whiteFixed);
        cursor: pointer;
        width: 153px;
    }
    .scrollUpIcon{
        flex-shrink: 0;
        cursor: pointer;
        width: 53px;
        height: 50px;
        color: var(--whiteFixed);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey1);
        border-radius: 4px;
    }
`