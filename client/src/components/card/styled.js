import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  margin-top: 62px;
  margin-right:15px;

  h3 {
    font-size: 16px;
    color: var(--grey1);
    margin: 16px 0px;
    font-family: "Lexend";
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }

  span {
    font-size: 14px;
    font-family: "Inter";
    color: var(--grey2);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const BackGroundImg = styled.div`
  background-color: var(--grey7);
  width: 280px;
  height: 152px;
  display: flex;
  border: 2px solid  var(--grey7);
  border-radius:4px;
  cursor: pointer;
  &:hover{
    border: 2px solid var(--brand1);
  }

  img {
    width: 262px;
    height: 150px;
    margin: auto;
    object-fit:contain;
  }
`;


export const DataCar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  div {
    display: flex;
    width: 51px;
    height: 32px;
    background-color: var(--brand4);
    border-radius: 4px;
    margin-right: 10px;

    p {
      margin: auto;
      font-size: 14px;
      color: var(--brand1);
      font-weight: 500;
      font-family: "Inter";
    }
  }
`;

export const Value = styled.p`
  position: absolute;
  right: 0;
  font-size:16px;
  font-family:'Lexend';
  font-weight:500;
  color:var(--grey1);
`;



