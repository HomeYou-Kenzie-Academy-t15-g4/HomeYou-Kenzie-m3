import styled from 'styled-components';

export const UserSection = styled.section`
  padding-top: 80px;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;

    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

    .bg-user {
      position: relative;
      width: 100%;
      min-height: 130px;

      border-radius: 10px 10px 0 0;
      background: ${({ theme }) => theme.colors.primary};
      border: 3px solid ${({ theme }) => theme.colors.primary};
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

      .box-img {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -10%);
        bottom: 0;
        margin: auto;

        height: 172px;
        width: 174px;
        border-radius: 50%;

        background: ${({ theme }) => theme.colors.grey00};
        z-index: 8;
        border: 3px solid ${({ theme }) => theme.colors.primary};

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 96%;
          max-height: 96%;
          border-radius: 55%;
          object-fit: cover;
          align-self: center;
          z-index: 99;
        }
      }
    }
    .user-info-box {
      width: 100%;
      background: ${({ theme }) => theme.colors.grey00};
      padding-top: 60px;
      padding-bottom: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 10px 10px;

      .detail {
        width: 110px;
        height: 3px;
        background: ${({ theme }) => theme.colors.grey100};
      }
    }
  }
`;
