import styled, { css } from 'styled-components';

import BaseText from './components/BaseText';

interface IStyledTitleProps {
  $fontSize: 'one' | 'two' | 'three';
  $textAlign?: 'center' | 'left' | 'right';
  $fontColor?: 'greyBold' | 'grey' | 'red';
}

interface IStyledParagraphProps {
  $fontWeight?: 'one' | 'two' | 'three';
  $fontColor?: 'greyBold' | 'grey' | 'red';
  $textAlign?: 'center' | 'left' | 'right';
}

export const StyledTitle = styled(BaseText)<IStyledTitleProps>`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.33;

  text-align: ${({ $textAlign }) => $textAlign};

  ${({ $fontSize }) => {
    switch ($fontSize) {
      case 'one':
        return css`
          font-size: 35px;
          font-weight: 700;
        `;
      case 'two':
        return css`
          font-size: 22px;
          font-weight: 600;
        `;
      case 'three':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
    }
  }}

  ${({ $fontColor, theme }) => {
    switch ($fontColor) {
      case 'greyBold':
        return css`
          color: ${theme.colors.grey400};
        `;
      case 'grey':
        return css`
          color: ${theme.colors.grey200};
        `;
      case 'red':
        return css`
          color: ${theme.colors.red};
        `;
      default:
        return css`
          color: ${theme.colors.grey300};
        `;
    }
  }}
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ $textAlign }) => $textAlign};

  ${({ $fontWeight }) => {
    switch ($fontWeight) {
      case 'one':
        return css`
          font-size: 16px;
          font-weight: 700;
        `;
      case 'two':
        return css`
          font-size: 16px;
          font-weight: 600;
        `;
      case 'three':
        return css`
          font-size: 16px;
          font-weight: 400;
        `;
    }
  }}

  ${({ $fontColor, theme }) => {
    switch ($fontColor) {
      case 'greyBold':
        return css`
          color: ${theme.colors.grey400};
        `;
      case 'grey':
        return css`
          color: ${theme.colors.grey200};
        `;
      case 'red':
        return css`
          color: ${theme.colors.red};
        `;
      default:
        return css`
          color: ${theme.colors.grey300};
        `;
    }
  }}
`;

export const StyledCaption = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 400;
`;
