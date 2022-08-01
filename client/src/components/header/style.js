import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey6);
  img {
    display: flex;
    width: 153px;
    height: 23px;
  }
`;

export const HeaderDivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const HeaderButtons = styled.button`
  padding: 10px;
  background-color: var(--grey6);
  border: none;
  color: var(--grey2);
`;
export const HeaderDivLogin = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(222, 226, 230, 1);
  border: none;
  color: rgba(73, 80, 87, 1);
`;
