import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    /* overflow-y: hidden; */
  }

  ::-webkit-scrollbar{
    width: 10px;
    background-color: rgba(0, 0, 0, 0.13);
  }

  ::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;    
    user-select: none;
  }

  img{
    max-width: 100%;
  }
    
  button{
    cursor: pointer;
    border: none;
  }
  
  dialog{
    display: unset;
    position: unset;
  }
`;

export const Container = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 20px;

  @media (min-width: 800px) {
    max-width: 85vw;
  }
`;
