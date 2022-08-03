import styled from "styled-components";

export const AdvertiserContainer = styled.div`
  height: 277px;
  background-color: var(--brand1);
  margin: 0 0 144px 0;
  .blue-bg-container {
    width: 100%;
    position: absolute;
    top: 75px;
  }
  .advertiser-box {
    h6 {
      margin: 24px 9px 0 0;
      font-size: 20px;
      line-height: 25px;
      color: var(--grey1);
      display: inline-block;
      line-height: 25px;
      font-weight: 600;
    }
    p {
      margin: 24px 0 0;
      color: var(--grey2);
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
    }

    border-radius: 4px;
    max-width: 1240px;
    width: 90%;

    margin: 0 auto;
    padding: 41px 40px 42px 41px;
    background-color: var(--grey10);

    .circle {
      cursor: pointer;
      background-color: var(--brand1);
      color: var(--whiteFixed);
      width: 104px;
      height: 104px;
      border-radius: 50%;
      font-size: 36px;
      line-height: 53px;
      font-weight: 500;
      text-align: center;
      padding: 25px 0;
    }
  }
`;
