import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  img{
    max-width: 100%;
  }
    
  button{
    cursor: pointer;
  }
  
  dialog{
    display: unset;
    position: unset;
  }
`;

const Container = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;

  @media (min-width: 800px) {
    max-width: 85vw;
  }
`;

export default { GlobalStyle, Container };
