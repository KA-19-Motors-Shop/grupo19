import styled from "styled-components";

export const Main = styled.main`
  max-width: 1482px;
  margin: 100px auto 116px;
  h5 {
    text-align:start;
  }
  @media (max-width: 600px) {
    padding:0 0 0 23px;

  }
  @media (min-width: 600px) {
    h5{
      padding:0 0 0 60px;

    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  overflow-x:auto;
  gap: 48px;
  ::-webkit-scrollbar{
    height: 0px;
  }
  @media (min-width: 600px) {
    padding-left:60px;
    /* padding:0 0 0 60px; */
    
  }
  
`;
