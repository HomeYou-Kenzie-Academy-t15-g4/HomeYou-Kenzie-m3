import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;

  .image-section {
    width: 50%;
    height: auto;
    min-height: 100vh;
    min-height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      margin: 200px auto;
      img {
        width: 100%;
      }
    }

    background: ${({ theme }) => theme.colors.primary};
  }

  .login-box {
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 20%;
      max-width: 70px;
      margin-bottom: 10px;
    }
  }

  .form-section {
    margin: 10px 15px;
    background: ${({ theme }) => theme.colors.grey00};
    border-radius: 15px;

    box-shadow: 1px 2.90909px 5.81818px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 40px;
    width: 430px;
    max-width: 95%;

    .form-container {
      width: 100%;
    }

    .text-container {
      margin-bottom: 40px;
      padding-left: 0;
    }
  }

  @media (max-width: 1400px) {
    .form-section {
      width: 30vw;
    }
  }

  @media (max-width: 1200px) {
    .form-section {
      width: 360px;
    }
  }

  @media (max-width: 400px) {
    .form-section {
      width: 94vw;
      padding: 20px;
    }
  }

  @media (max-height: 700px) {
    height: 700px;

    .image-section {
      height: 100%;
    }
  }
`;
