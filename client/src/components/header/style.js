import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* width: 100vw; */
  height: 100%;
  height: 70px;
  background-color: var(--grey10);
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--grey4);
  z-index: 20;
  position: sticky;
  top: 0;
  .container{
    padding: 0 20px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

  }
  img {
    display: flex;
    width: 153px;
    cursor: pointer;
    height: 23px;
  }
`;
export const HeaderDivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  gap: 10px;
  flex: 1;
  padding: 0 16px 0 0;
  button.link {
    color: var(--grey2);
  }
  @media (max-width: 825px) {
    display: none;
  }
`;

export const HeaderDivLogin = styled.div`
  padding: 0px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px 0 0px;
  gap: 10px;
  position: relative;
  :hover .login-box-user{
    display: initial;
  }
  .login-box-user{
    padding: 0px 10px 0px 22px ;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    background-color: var(--grey9);
    width: 200px;
    position: absolute;
    top: 60px;
    display: none;
    right: 0;
    >div{
      margin: 16px 0;
      color: var(--grey2);
      font-size: 16px;
      line-height: 28px;
      cursor: pointer;
      :hover{
        color: var(--brand1);
      }
    }
  }
  button.link {
    color: var(--grey2);
  }
  button.outline1 {
    color: var(--grey2);
    border-color: var(--grey4);
  }
  .circle {
    margin: 0 0 0 44px;
  }
  border-left: 2px solid var(--grey4);
  color: var(--grey2);
  @media (max-width: 825px) {
    display: none;
  }
`;
export const HeaderBurgerMenu = styled.div`
  display: none;
  @media (max-width: 825px) {
    display: initial;
    svg {
      width: 16px;
      height: 21px;
      cursor: pointer;
    }
  }
  .drop-down-menu-btn{
    padding:0 16px;
    height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .menu-drop-down-user{
    padding: 2px 10px;
    border-top: 2px solid var(--grey4);
  }
  .drop-down-menu {
    filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.09));
    background-color: var(--whiteFixed);
    position: fixed;
    top: 69px;
    border-top: 1px solid var(--grey4);
    transition: 1s all;
    left: ${(props)=>props.openDropDownMenu ? '0': '100%'};
    /* display: ${(props)=>props.openDropDownMenu ? 'initial': 'none'}; */
    width: 100%;
    button.link {
      color: var(--grey2);
      margin: 4px 0;
      padding: 0 4px;
    }
    button.outline1 {
      color: var(--grey2);
      border-color: var(--grey4);
      text-align: center;
      padding: 0;
    }
    button {
      text-align: start;
    }
  }
  .drop-down-menu-login{
    height: 184px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 32px 12px;
    border-top: 1px solid var(--grey4);
  }
`;
