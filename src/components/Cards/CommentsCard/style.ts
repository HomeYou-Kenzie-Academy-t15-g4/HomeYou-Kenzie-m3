import styled from 'styled-components';

export const StyledContainerCardComment = styled.ul`
  background-color: #d9dbde;
  margin: 0;
  padding: 0;
  margin-top: 20%;
  display: flex;
  overflow: scroll;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: 750px) {
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    list-style: none;
    margin-left: 15px;
    min-width: 200px;
  }
  @media (min-width: 768px) {
    li {
      gap: 150px;
      min-width: 390px;
    }
  }
  @media (min-width: 1024px) {
    li {
      gap: 150px;
      min-width: 390px;
    }
  }
`;

export const StyledPDescriptionComment = styled.p`
  max-width: 390px;
`;
export const StyledInfoUserComment = styled.div`
  margin-top: 10px;
  max-width: 210px;
  display: flex;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  div {
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
