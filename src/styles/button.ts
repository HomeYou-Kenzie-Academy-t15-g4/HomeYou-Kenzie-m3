import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize: 'large' | 'medium' | 'short';
  $buttonStyle: 'primary' | 'default' | 'greenBold' | 'none';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;

  border-radius: 5px;
  transition: 0.4s;

  .spinner {
    animation: spinner infinite 0.7s forwards;
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'large':
        return css`
          padding: 0 40px;
          height: 50px;
        `;
      case 'medium':
        return css`
          padding: 0 30px;
          height: 50px;
        `;
      case 'short':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case 'primary':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primaryFocus};
          }
        `;
      case 'greenBold':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.secondary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'default':
        return css`
          color: ${theme.colors.grey400};
          background: ${theme.colors.grey100};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'none':
        return css`
          color: ${theme.colors.grey200};
          background: transparent;
        `;
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;
