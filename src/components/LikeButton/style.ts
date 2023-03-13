import styled from 'styled-components';

export const StyledLikeButton = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;

  .animation {
    pointer-events: none;
  }
`;
