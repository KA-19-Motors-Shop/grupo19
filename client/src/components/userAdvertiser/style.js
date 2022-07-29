import styled from "styled-components";

export const UserAdvertiserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 16px 0px;
    cursor: pointer;
    .circle{
        border-radius: 50%;
        width: 32px;
        height: 32px;
        background-color: ${(props)=>props.color};
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color:var(--whiteFixed);
        padding: 4px 0;
        text-align: center;
    }
    span{
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: ${(props)=>props.isWhite ? 'var(--whiteFixed)': 'var(var(--grey2))'};

    }
`