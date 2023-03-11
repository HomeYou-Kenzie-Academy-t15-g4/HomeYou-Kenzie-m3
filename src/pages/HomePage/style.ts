import styled from 'styled-components';

<<<<<<< HEAD
export const StyledSectionHomePage = styled.section`
=======
const StyledSectionHomePage = styled.main`
>>>>>>> bd9d7ac188bd78f9ba816c8fe6304c07153797bf
  width: 100%;
  height: 100vh;

  header {
    box-shadow: none;
  }

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

export const StyledButton = styled.button`
  --size: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
`;

export const StyledRatingFavorite = styled.div`
  display: flex;
`;
