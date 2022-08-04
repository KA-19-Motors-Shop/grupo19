import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 292px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.39) 0%, #000000 100%);
  border-radius: 4px 4px 4px 4px;
  margin-right: 10px;
  z-index: 10;
  &:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }

  img {
    position: absolute;
    display: flex;
    object-fit: contain;
    width: 100%;
    height: auto;
    z-index: -1;
    padding-top: 30px;
    padding-left: 5%;
    object-fit: cover;
    opacity: 0.4;
  }

  button {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-right: 5%;
    background-color: var(--brand1);
    height: 61px;
    align-items: center;
    border: none;
    border-radius: 0px 0px 4px 4px;

    p {
      margin-left: 5%;
      font-size: 16px;
      color: var(--whiteFixed);
      font-weight: 600;
    }
  }
  button:hover {
    background-color: var(--brand2);
  }

  @media (min-width: 768px) {
    width: 735px;

    img {
      padding-top: 0px;
      width: 100%;
      height: 100%;
      transform: translateY(-20%);
      /* left: 10%; */
    }
  }
`;

export const Hours = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--whiteFixed);
  height: 36px;
  width: 123px;
  border-radius: 32px;

  p {
    color: var(--grey1);
    font-size: 16px;
    font-weight: 500;
    padding-right: 10px;
  }
`;

export const InfoCard = styled.div`
  width: 292px;
  margin: auto;
  padding: 33px 0 0 20px;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%); */
  h6 {
    font-family: "Lexend";
    font-size: 18px;
    color: var(--grey10);
    margin-top: 35px;
    margin-bottom: 20px;
  }

  .Value {
    color: var(--whiteFixed);
    font-size: 16px;
    font-family: "Lexend";
    font-weight: 500;
    margin-bottom: 25px;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

export const Details = styled.p`
  font-size: 16px;
  font-family: "Inter";
  font-weight: 400;
  color: var(--grey5);
  margin-bottom: 20px;
`;

export const DataCar = styled.div`
  position: relative;
  padding: 0 24px 0 0px;
  @media (min-width:768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  .data_car_btn_section{
    display: flex;

  }
  .data_car_btn {
    justify-content: space-between;
    display: flex;
    width: 51px;
    height: 32px;
    background-color: var(--brand4);
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 20px;

    p {
      margin: auto;
      font-size: 14px;
      color: var(--brand1);
      font-weight: 500;
      font-family: "Inter";
    }
  }
`;
