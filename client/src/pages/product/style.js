import styled from "styled-components";

export const SecundaryHeader = styled.div`
  width: 100%;
  height: 503px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(81, 38, 234, 1);
`;
export const H2Header = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 748px;
  width: 100%;
  h2 {
    color: rgba(253, 253, 253, 1);
  }
  @media (max-width:650px) {
    padding: 0 10px;
    h2{
      font-size: 32px;
    }
  }
`;
export const PHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  p {
    padding: 20px 10px;
    color: rgba(253, 253, 253, 1);
  }
`;
export const ButtonHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  button{
    height: 48px;
    padding: 0px 65px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    button{
      width: 90%;
    }
  }

`;
