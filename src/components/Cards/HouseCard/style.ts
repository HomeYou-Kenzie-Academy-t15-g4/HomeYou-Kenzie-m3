import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;

  .house-link {
    width: 33%;
  }

  li {
    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.grey00};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
    width: 100%;
    height: 340px;
    border-radius: 10px;
    box-shadow: 0px 3.34259px 3.34259px rgba(0, 0, 0, 0.25);

    .image-box {
      width: 100%;
      height: 250px;
      border-radius: 10px 10px 0 0;
      img {
        border-radius: 8px 8px 0 0;
        width: 100%;
        max-height: 100%;
      }
    }

    .text-box {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }

    .link-house {
      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.grey200};
      background: ${({ theme }) => theme.colors.grey100};

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      width: 50px;
      height: 50px;
      border-radius: 25px;

      position: relative;
      top: -280px;
      right: -280px;

    }
    cursor: pointer;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 70px;
    align-items: center;
    justify-content: center;

    li {
      max-width: 360px;
    }
  }
`;
