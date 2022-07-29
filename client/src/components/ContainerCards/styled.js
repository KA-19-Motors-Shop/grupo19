import styled from "styled-components";

export const Main = styled.main`
  max-width: 1482px;
  margin: 100px auto 116px;
  h5 {
    text-align:start;
    padding:0 0 0 20px;
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
  margin-left:20px;
  ::-webkit-scrollbar{
    height: 0px;
  }
  @media (min-width: 600px) {
    margin-left:60px;
    
  }
  
`;
