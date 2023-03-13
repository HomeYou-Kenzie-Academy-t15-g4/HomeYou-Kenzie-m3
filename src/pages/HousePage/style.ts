import styled from 'styled-components';

export const StyledHousePage = styled.main`
  display: flex;
  flex-direction: column;

  .mainTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 13px;
  }

  .guests {
    display: flex;
    align-self: flex-start;
  }

  .galerySection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.grey00};
    padding: 35px 30px;
  }

  .galerySection img {
  }

  .galeryTitle {
    justify-self: center !important;
  }

  .sliderBox {
    display: block;
  }

  .reserveSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    padding-bottom: 33px;
  }

  .infoSection {
    display: flex;
    justify-content: space-between;
  }

  .infoSection article {
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 209px;
    height: max-content;
    max-width: 450px;
    min-width: 350px;
  }

  .servicesBox {
    max-width: 450px;
    margin-top: 30px;
    padding: 35px 20px;
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.grey00};
    border-radius: 20px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .infoSection article ul {
    display: flex;
    max-width: 100%;
    max-height: 210px;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 13px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 25px;
  }

  .infoSection article ul li {
    display: flex;
    align-items: center;
    width: 47%;
    gap: 7px;
  }

  .iconBox {
    width: 20px;
    height: 20px;
  }

  .iconBox svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.grey200};
  }

  .servicesName {
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.grey400};
  }

  .detailsTextBox {
    height: 100%;
    padding: 35px 25px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.grey400};
    background-color: ${({ theme }) => theme.colors.grey00};
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div {
      margin-top: 10px;
      margin-bottom: -10px;
      p {
        margin-top: 10px;
        margin-bottom: -10px;
      }
    }
  }
  @media (max-width: 870px) {
    .infoSection {
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-direction: column;
    }
    .infoSection article {
      width: 288px;
      max-width: 288px;
      
    }
  }

  @media (max-width: 420px) {
    .detailsTextBox {
      div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: -10px;
        p {
          margin-top: 10px;
          margin-bottom: -10px;
        }
      }
    }
    .servicesBox{
        width: 100%;
    }
    .infoSection article {
        min-width: 80%;
      
      div {
        width: 100%;
      }
      ul {
        padding-right: 25px;
        max-width: 100%;
      }
      li {
        span {
          display: flex;
          flex-wrap: wrap;
        }
      }
      width: 96vw;
    }
  }
`;

export const StyledRatingBox = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 80px;

  .btnRating {
    display: flex;
    align-items: center;
  }

  .btnRating button {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 100%;
    font-size: 2.5rem;
  }

  @media (max-width: 800px) {
    .btnRating {
      div {
        display: none;
      }
    }
  }
`;
