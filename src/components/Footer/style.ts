import styled from 'styled-components';

const StyledDivFooter = styled.footer`
  background-color: #d9dbde;
  height: 164px;
  position: absolute;
  bottom: 0;
  width: 99.2%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }

  .footerBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footerBody--devs {
    display: flex;
    gap: 0.5rem;
  }

  @media (min-width: 624px) {
    flex-direction: column;
    padding-bottom: 0.5rem;
  }
`;

export default StyledDivFooter;
