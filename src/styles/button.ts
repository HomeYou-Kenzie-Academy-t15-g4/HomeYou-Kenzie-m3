import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize: 'large' | 'medium' | 'short';
  $buttonStyle: 'primary' | 'default' | 'greenBold';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;

  border-radius: 15px;
  transition: 0.4s;

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
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;