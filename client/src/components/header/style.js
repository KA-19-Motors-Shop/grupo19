import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey6);
  img {
    display: flex;
    width: 153px;
    height: 23px;
  }
  border-bottom: 2px solid var(--grey4);
`;
export const HeaderDivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  gap: 10px;
`;

export const HeaderDivLogin = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(222, 226, 230, 1);
  border-left: 1px solid var(--grey4);
  color: var(--grey2);
`;
