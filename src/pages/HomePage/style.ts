import styled from 'styled-components';

const StyledSectionHomePage = styled.main`
  width: 100%;
  height: 100vh;

  .home-section {
    padding-top: 70px;

    .bg-box {
      background: ${({ theme }) => theme.colors.grey00};
      width: 100%;

      .text-box {
        display: flex;
        flex-direction: column;
        gap: 15px;

        button {
          width: 50%;
        }
      }
    }
  }

  @media (min-width: 800px) {
    .home-section {
      .bg-box {
        .separe-itens {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .text-box {
            max-width: 45%;
            p {
              max-width: 45ch;
            }
            button {
              width: 40%;
            }
          }
          .image-box {
            max-width: 45%;
            height: 100%;
            img {
              margin-top: 15px;
              max-width: 80%;
            }
          }
        }
      }
    }
  }
`;

export default StyledSectionHomePage;
