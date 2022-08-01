import styled from "styled-components";

export const SecundaryHeader = styled.div`
  width: 100%;
  padding: 80px 0px 160px;
  background-color: rgba(81, 38, 234, 1);
  text-align: center;
  @media (max-width:740px) {
    padding: 53px 0px 105px;

  }
  h1{
    max-width: 748px;
    width: 100%;
    margin: 0 auto;
    font-size:44px ;
    line-height: 56px;
    @media (max-width:740px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
  @media (max-width:740px) {
    .buttons{
      flex-direction: column;
      >div{
        width: 100%;
        button{
          width: 100%;
        }
      }
    }
  }
  .buttons{
    display: flex;
    padding: 0 12px 0 ;
    justify-content: center;
    align-items: center;
    gap: 20px;
    >div{
      button{
        padding: 24px 65px !important;
      }
    }
  }

  p{
    margin: 20px auto 48px;
    line-height: 28px;
  }
  h1,p {
    text-align: center;
    color: rgba(253, 253, 253, 1);
  }
`;
