import styled from "styled-components";

export const AdContainer = styled.main`
  position: relative;
  background-color: var(--grey8);
  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);
    margin: 32px 0 8px 0;
  }
  .container {
    margin: 0 auto;
    max-width: 1265px;
    min-height: 500px;
    display: flex;
    justify-content: space-between;
    padding: 40px 12px;
    flex-wrap: wrap;
    gap: 16px;
    @media (max-width: 1238px) {
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: column;
    }
  }
  .blue-bg {
    background-color: var(--brand1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
  }
  figure {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .showcase-img {
    height: 355px;
    flex: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .box {
    padding: 36px 38px 36px;
    max-width: 752px;
    background-color: var(--grey10);
    z-index: 2;
    border-radius: 4px;
  }
  .left-col {
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 41px 0 24px;
    @media (max-width:500px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    button {
      padding: 4px 8px;
      height: 32px;
    }
    span {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: var(--grey1);
    }
  }
  .comments{
    ul{
        margin: 24px 0 20px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        li{
            flex-basis: 30%;
            >div{
                display: inline-flex;
                margin:8px 0 ;
            }
            .time-passed{
                color: var(--grey3);
                font-size: 14px;
                line-height: 24px;
                cursor: pointer;
            }
            p{
                margin:0px ;
            }
        }
    }
  }

  .comments-input{
    form{
        position: relative;
        >div{
            margin: 0;
        }
    }
    textarea{
        min-height: 128px;
        position: relative;
    }
    .btn-comments-recommendation{
        display: flex;
        gap: 10px;
        margin: 15px 0 ;
        flex-wrap: wrap;
        button{
            border: 0;
            padding: 0px 12px;
            font-weight: 500;
            font-size: 12px;
            line-height: 24px;
            background: var(--grey7);
            color: var(--grey3);
            border-radius: 24px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
   
  }
  .col-right{
    z-index: 4;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 440px;
    min-width: 428px;
    @media (max-width: 1238px) {
        max-width: 100%;
        min-width: 128px;

    }
  }
  .gallery{
    width: 100%;
    min-width: 428px;
    @media (max-width: 1238px) {
        margin: 0 auto;
        min-width: 128px;
    }
    ul{
        margin: 16px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        @media (max-width: 468px) {
            justify-content: center;
        }
    }
    figure{
        cursor: pointer;
        width: 108px;
        height: 108px;
        border: 4px;
        overflow: hidden;
        background-color: var(--grey7);
        @media (max-width:347px) {
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
  }

  .owner{
    text-align: center;
    width: 100%;
    min-width: 428px;
    @media (max-width: 1238px) {
        margin: 0 auto;
        min-width: 128px;
    }
    p{
        margin:  32px 0;
    }
  }

  .ownerNameInitials{
    text-align: center;
    color: var(--whiteFixed);
    border-radius: 50%;
    height: 104px;
    width: 104px;
    cursor: pointer;
    margin: 0px auto 28px;
    font-weight: 500;
    font-size: 36px;
    padding: 26px 0;
    line-height: 53px;
    background-color: var(--brand1);
  }

`;
