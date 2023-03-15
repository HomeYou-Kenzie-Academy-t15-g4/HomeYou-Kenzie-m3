import styled from 'styled-components';
export const CommentsSection = styled.section`
  margin: 0;
  background: ${({ theme }) => theme.colors.grey00};
  margin-top: 50px;
`;

export const StyledContainerCardComment = styled.ul`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

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
    max-width: 200px;
    height: auto;

    @media (min-width: 650px) {
      min-width: 40%;
      max-width: 40%;
    }
  }
  @media (min-width: 761px) {
    padding: 2rem 5rem 2rem 5rem;
    gap: 3rem;
  }
  @media (min-width: 1024px) {
    li {
      gap: 190px;
      padding: 0;
      margin-left: 0;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
