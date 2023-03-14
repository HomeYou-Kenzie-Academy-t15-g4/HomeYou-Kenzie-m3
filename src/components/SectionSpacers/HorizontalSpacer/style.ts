import styled from 'styled-components';

export const StyledHorizontalSpacer = styled.div`
  width: 100%;
  align-self: center;
  height: 2px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.grey100};

  /* @media (min-width: 720px) {
    display: block;
  } */
`;
