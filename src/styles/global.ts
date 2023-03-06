import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img{
    max-width: 100%;
  }
  
  ul,li{
    list-style: none;
  }
  
  button{
    cursor: pointer;
    border: none;
  }

  :root{
    --color-primary: #04C35C;  
    --color-primary-focus: #0DE872;   

    --color-primary-negative: #0C6B38;   

    --grey-4: #121214;
    --grey-3: #373A3E;
    --grey-2: #343B41;
    --grey-1: #D9DBDE;
    --grey-0: #F9F9F9;

    --white-fixed: #fff;
    --black-fixed: #000;
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
