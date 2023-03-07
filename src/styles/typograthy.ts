import styled from 'styled-components';

const Title1 = styled.h1`
  font-family: 'Montserrat', sans-serif;

  font-weight: 700;
  font-size: 45px;
  line-height: 1.33;

  @media (min-width: 800px) {
    font-size: 45px;
    line-height: 1.49;
  }

  color: var(${(props) => props.color});
`;

const Title2 = styled.h2`
  font-family: 'Montserrat', sans-serif;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;

  @media (min-width: 800px) {
    font-size: 28px;
    line-height: 1.49;
  }

  color: var(${(props) => props.color});
`;

const Title3 = styled.h3`
  font-family: 'Montserrat', sans-serif;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;

  @media (min-width: 800px) {
    font-size: 22px;
    line-height: 1.49;
  }

  color: var(${(props) => props.color});
`;

const Headline = styled.p`
  font-family: 'Montserrat', sans-serif;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;

  @media (min-width: 800px) {
    font-size: 18px;
    line-height: 1.33;
  }

  color: var(${(props) => props.color});
`;

const HeadlineBold = styled.p`
  font-family: 'Montserrat', sans-serif;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;

  @media (min-width: 800px) {
    font-size: 18px;
    line-height: 1.33;
  }

  color: var(${(props) => props.color});
`;

const Body = styled.p`
  font-family: 'Montserrat', sans-serif;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.19;

  @media (min-width: 800px) {
    font-size: 14px;
    line-height: 1.26;
  }

  color: var(${(props) => props.color});
`;
