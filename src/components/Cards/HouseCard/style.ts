import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 70px;
    align-items: center;
    justify-content: center;
  }

  li {
    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.grey00};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
    width: 280px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 3.34259px 3.34259px rgba(0, 0, 0, 0.25);

    .image-box {
      width: 100%;
      min-height: 180px;
      height: 180px;
      max-height: 180px;
      border-radius: 10px 10px 0 0;
      img {
        border-radius: 8px 8px 0 0;
        width: 100%;
        height: 100%;
      }
    }

    .text-box {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      padding-bottom: 20px;
      .city-name {
        text-transform: capitalize;
      }
    }
  }
`;
