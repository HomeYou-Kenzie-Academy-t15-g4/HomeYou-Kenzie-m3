import styled from 'styled-components';
export const CommentsSection = styled.section`
  margin: 0;
  background: ${({ theme }) => theme.colors.grey00};
  margin-top: 30px;
`;

export const StyledContainerCardComment = styled.ul`
  overflow: scroll;
  width: 100%;
  gap: 1em;

  @media (min-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    overflow: hidden;
  }

  li {
    list-style: none;
    margin-left: 15px;
    min-width: 200px;
    width: 200px;
    height: 150px;
  }
  @media (min-width: 761px) {
    padding: 2rem 5rem 2rem 5rem;
    gap: 3rem;
    li {
      width: 250px;
    }
  }
  @media (min-width: 1024px) {
    li {
      gap: 190px;
      padding: 0;
      width: 40%;
      min-width: 390px;
      margin-left: 0;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledPDescriptionComment = styled.p`
  max-width: 390px;
`;
export const StyledInfoUserComment = styled.div`
  margin-top: 10px;
  max-width: 210px;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
  .contentBox {
    margin-left: 5%;
    height: 6%;
  }
`;

export const StyledPNameComment = styled.p`
  max-width: 100px;
`;
export const StyledPDataComment = styled.p`
  font-size: small;
  color: #343b41;
`;
