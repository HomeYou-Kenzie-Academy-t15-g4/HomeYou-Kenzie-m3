import styled from 'styled-components';

export const UserHousesSection = styled.section`
  margin-top: 20px;
  width: 100%;
  min-height: 490px;
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 900px) {
    padding: 25px;
    max-width: 45%;
    .title-box {
      button {
        max-width: 60%;
      }
    }
  }

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.grey00};

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 30px;
    width: 100%;

    button {
      min-width: 40%;
      width: 60%;
    }
  }

  .houses-list {
    width: 100%;

    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    gap: 20px;

    .houses-box {
      display: flex;
      flex-direction: column;

      min-width: 250px;
      max-width: 80%;
      margin-bottom: 20px;
      min-height: 320px;
      @media (min-width: 900px) {
        height: 370px;
      }
      border-radius: 10px;

      border: 1px solid ${({ theme }) => theme.colors.grey100};
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

      .button-box {
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          margin-left: -20px;
        }
      }

      .image-box {
        width: 100%;
        min-height: 214px;
        @media (min-width: 900px) {
          max-height: 248px;
        }

        img {
          width: 100%;
          height: 100%;
          border: 1px solid ${({ theme }) => theme.colors.grey100};
        }
      }
    }

    .reserve-box {
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .button-mobile {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;