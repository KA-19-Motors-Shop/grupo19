import styled from "styled-components";


export const FooterContainer = styled.footer`
    height: 140px;
    background-color: var(--grey0);
    color: var(--whiteFixed);
    font-size: 14px;
    font-weight: 400;
    .container{
        padding: 0 59px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: 1482px;
        margin: 0 auto;
        @media (max-width: 630px) {
            padding: 0;
        }
    }
    @media (max-width:630px) {
        .container{
            flex-direction: column;
            gap: 60px;
            justify-content: center;
            
        }
        padding: 0 19px;
        height: 310px;
    }

    
    span{
        color: var(--whiteFixed);
        line-height: 24px;
        font-size: 14px;
        text-align: center;
    }
    
    img{
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