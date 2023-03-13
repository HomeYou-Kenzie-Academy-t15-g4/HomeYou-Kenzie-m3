import styled from 'styled-components';

const StyledContainerPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .info-section {
    display: flex;
    flex-direction: column;

    .user-cards {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;

export { StyledContainerPage };
