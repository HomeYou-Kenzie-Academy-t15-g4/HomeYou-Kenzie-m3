import styled from 'styled-components';

export const StyledSectionSpacer = styled.div`
  display: none;
  width: 0.3vw;
  align-self: center;
  margin-top: 70px;
  height: 180px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.grey100};

  @media (min-width: 720px) {
    display: block;
  }
`;
