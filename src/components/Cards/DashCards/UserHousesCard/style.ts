import styled from 'styled-components';

export const UserHousesSection = styled.section`
  margin-top: 20px;
  width: 100%;
  min-height: 500px;
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 900px) {
    padding: 25px;
    max-width: 45%;
    height: 500px;
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

  .edit-button {
    cursor: pointer;
  }

  .edit-button:hover {
    cursor: pointer;
    text-transform: underline;
  }

  .add-button-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    max-width: 80%;
    margin-bottom: 20px;
    min-height: 320px;
    gap: 13px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.grey100};
    border-radius: 10px;
    p {
      color: ${({ theme }) => theme.colors.grey200};
    }
  }

  .add-button-box:hover {
    .add-button {
      filter: brightness(1.1);
    }
    p {
      color: ${({ theme }) => theme.colors.grey400};
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
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.colors.grey100};
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);


      h2 {
        white-space: nowrap;
        width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .button-box {
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          width: 20%;
        }
      }

      .image-box {
        width: 100%;
        min-height: 214px;
        max-height: 214px;

        img {
          width: 100%;
          min-height: 214px;
          max-height: 214px;
          border: 1px solid ${({ theme }) => theme.colors.grey100};
        }
      }
      .reserve-box {
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  .button-mobile {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
