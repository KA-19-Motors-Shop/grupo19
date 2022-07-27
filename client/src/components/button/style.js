import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: inline-block;
    width: ${(props)=>props.fullWidth===true ? '100%' : 'auto'};
    button{
        border-radius: 4px;
        padding: ${(props)=>props.isBig===true ? '12px 28px 12px 28px':'12px 20px 12px 20px'};
        height: ${(props)=>props.isBig===true ? '48px':'38px'};
        font-size:${(props)=>props.isBig===true ? '16px':'14px'};
        width: ${(props)=>props.fullWidth===true ? '100%' : 'auto'};
        transition: 1s;
        border-width: 1.5px;
        border-style: solid;
        font-weight: 600;
        line-height: 0;
    }
    :hover{
        transition: 1s;
    }
    .default{
        border-color: var(--grey0);
        background-color:var(--grey0);
        color: var(--whiteFixed);
        :hover{
            background-color: var(--grey1);
        }
    }
    .negative{
        border-color: var(--grey6);
        background-color: var(--grey6);
        color: var(--grey2);
        :hover{
            background-color: var(--grey5);
        }
    }
    .disable{
        border-color: var(--grey5);
        background-color: var(--grey5);
        color: var(--whiteFixed);
    }
    .brand1{
        border-color: var(--brand1);
        background-color: var(--brand1);
        color: var(--whiteFixed);
        :hover{
            background-color: var(--brand1);
        }
    }
    .brandOpacity{
        background-color: var(--brand4);
        border-color: var(--brand4);
        color: var(--brand1);
    }
    .light{
        background-color:var(--grey10);
        border-color: var(--grey10);
        color: var(--grey1);
    }
    .outlineLight{
        background-color: transparent;
        border-color: var(--whiteFixed);
        color: var(--whiteFixed);
        :hover{
            background-color: var(--brand4);
        }
    }
    .outline1{
        color: var(--grey0);
        border-color: var(--grey0);
        background-color: transparent;
    }
    .outline1{
        color: var(--grey0);
        border-color: var(--grey4);
        background-color: transparent;
    }
    .outlineBrand1{
        color: var(--brand1);
        border-color: var(--brand1);
        background-color: transparent;
        :hover{
            background-color: var(--brand4);
        }
    }
    .link{
        background-color: transparent;
        border-color: transparent;
        color: var(--grey0);
        :hover{
            background-color: var(--grey8);
        }
    }
    .alert{
        background-color: var(--alert3);
        color: var(--alert1);
        border-color:var(--alert3) ;
    }
    .sucess{
        background-color: var(--sucess3);
        color: var(--sucess1);
        border: var(--sucess3);
    }
    .brandDisable{
        background-color: var(--brand3);
        color: var(--whiteFixed);
        border-color: var(--brand3);
    }

    


`

