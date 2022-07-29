import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  margin-top: 62px;
  margin-right:15px;

  h3 {
    font-size: 16px;
    color: #212529;
    margin: 16px 0px;
    font-family: "Lexend";
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }

  span {
    font-size: 14px;
    font-family: "Inter";
    color: #495057;
  }
`;

export const BackGroundImg = styled.div`
  background-color: #e9ecef;
  width: 280px;
  height: 152px;
  display: flex;
  border: 2px solid #e9ecef;
  border-radius:4px;

  &:hover{
    border: 2px solid #4529E6;
  }

  img {
    width: 262px;
    height: 150px;
    margin: auto;
    object-fit:contain;
  }
`;



export const DataUser = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  margin-bottom: 16px;

  div {
    background-color: #4529e6;
    border-radius: 150px;
    width: 32px;
    height: 32px;
    color: #ffffff;
    display: flex;
    margin-right: 16px;

    p {
      margin: auto;
      font-size: 14px;
      font-weight: 500;
      font-family: "Inter";
    }
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
    background-color: #edeafd;
    border-radius: 4px;
    margin-right: 10px;

    p {
      margin: auto;
      font-size: 14px;
      color: #4529e6;
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
  color:#212529;
`;
