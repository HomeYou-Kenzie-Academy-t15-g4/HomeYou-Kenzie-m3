import styled from 'styled-components';

const StyledDivNotFound = styled.div`
  .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;
  }

  .box img {
    width: 40%;
  }

  .box h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }

  a {
    height: 40px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #04c35c;
    color: #fff;
    border: transparent;
    transition: 1s ease;
  }

  a:hover {
    background-color: #029144;
  }

  @media (min-width: 700px) {
    .box h2 {
      font-size: 44px;
    }

    .box {
      gap: 2rem;
      margin-top: 1rem;
    }
  }
`;

export default StyledDivNotFound;
