import styled from 'styled-components';

const StyledDivNotFound = styled.div`
  padding-top: 30px;
  .box {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  h1{
    font-size: 23px;
    margin: 0 25px 13px 25px;
    
  }

  .box img {
    width: 40%;
    max-height: 30%;
  }

  .box h2 {
    margin: 13px 50px 0 50px;
    
    line-height: 26px;
  }

  a {
    button{

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      cursor: pointer;
      background-color: #04c35c;
      color: #fff;
      border: transparent;
      transition: 1s ease;
      margin:  13px;
    }
  }
  .insideBox{
    display: flex;
    width: 100%;
  }


  @media (min-width: 700px) {
    h1{
      font-size: 23px;
      margin: 10px;
    }

    .box h2 {
      font-size: 18px;
    }

    .box {
      gap: rem;
      margin-top: 1rem;
    }
  }

  @media (max-width: 500px){
    h1{
      font-size: 20px;
      margin-bottom: -35px;
    }
    a{

      button{margin-bottom: -25px }
    }
    
    
    h2{
      margin: 0 10px;
      font-size: 13px;
    }
    
  .box img {
    width: 80%;
  }
  }
`;

export default StyledDivNotFound;
