import styled from 'styled-components';

const StyledContainerPage = styled.main`
  /* display: flex;
  flex-direction: column;
  background-color: aqua;
  min-height: 100vh;
  justify-content: space-between; */
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const StyledSectionProfile = styled.section`
  /* background: linear-gradient(180deg, #04c35c 50%, #fff 50%);
  
  height: 15rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px; */
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  .contentSection {
    background: linear-gradient(180deg, #04c35c 35%, #f9f9f9 20%, #f9f9f9 20%);

    height: 15rem;
    width: 100%;

    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 4rem;
  }

  .contentImage {
    /* width: 4rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 60%;
    border: 3px solid #04c35c; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    padding: 1rem;
  }
  hr {
    color: blueviolet;
  }

  .contentImage img {
    object-fit: cover;
    width: 7rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 60%;
    border: 3px solid #04c35c;
  }

  button {
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }
`;

export { StyledSectionProfile, StyledContainerPage };
