import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0 ,0 ,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 19px;
    .modal-box{
        padding: 0 24px 32px;
        max-width: 520px;
        width: 100%;
        background-color: var(--whiteFixed);
        border-radius: 8px;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        margin: 0 0 32px;
        span{
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            color: var(--grey1);
        }
        svg{
            color: var(--grey4);
            width: 24px;
            font-size: 24px;
            height: 24px;
            cursor: pointer;
        }
    }
    .modal-body{

    }
`
