import styled from 'styled-components';

export const StyledRegisterPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .image-section {
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    div {
      margin: 200px auto;
      img {
        width: 100%;
      }
    }

    background: ${({ theme }) => theme.colors.primary};
  }

  .form-section {
    background: ${({ theme }) => theme.colors.grey00};
    border-radius: 15px;

    box-shadow: 0px 2.90909px 5.81818px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 80px auto;
    padding: 40px;

    img {
      position: relative;
      top: -100px;
      width: 20%;
      margin-bottom: 20px;
    }

    .text-container {
      margin-top: -80px;
      margin-bottom: 20px;
      padding-left: 0;
      margin-left: -70px;
    }
  }
`;
