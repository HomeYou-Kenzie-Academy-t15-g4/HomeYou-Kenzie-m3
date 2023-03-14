import styled from 'styled-components';

export const UserRentsSection = styled.section`
  margin-top: 20px;
  width: 100%;
  min-height: 500px;
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 900px) {
    padding: 25px;
    width: 45%;
    .title-box {
      button {
        height: 40px;
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
    height: 40px;

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
    height: 330px;
    gap: 13px;
    cursor: pointer;
    background-color: rgb(241, 238, 238);
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
      width: 250px;
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
        border-left: 1px solid ${({ theme }) => theme.colors.grey100};
        border-right: 1px solid ${({ theme }) => theme.colors.grey100};
        border-radius: 8px 8px 0 0;

        button {
          margin-left: 20px;
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
        display: flex;
        align-items: center;
        height: 60px;
        margin-top: -1px;
        border-left: 1px solid ${({ theme }) => theme.colors.grey100};
        border-right: 1px solid ${({ theme }) => theme.colors.grey100};
        

        .checkin-box {
          
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        }

        .checkout-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
          border-left: 0.1px solid  ${({ theme }) => theme.colors.grey100};
        }
      }
    }
  }

  .no-reserve-box{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .button-mobile {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
