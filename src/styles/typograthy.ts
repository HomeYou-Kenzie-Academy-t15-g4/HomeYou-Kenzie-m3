import styled, { css } from 'styled-components';
import BaseText from './components/BaseText';

interface IStyledTitleProps {
  fontSize: 'one' | 'two' | 'three';
  textAlign?: 'center' | 'left' | 'right';
}

interface IStyledParagraphProps {
  fontColor?: 'greyBold' | 'grey' | 'red';
  textAlign?: 'center' | 'left' | 'right';
}

const StyledTitle = styled(BaseText)<IStyledTitleProps>`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.6;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'one':
        return css`
          font-size: 28px;
          font-weight: 700;
        `;
      case 'two':
        return css`
          font-size: 22px;
          font-weight: 700;
        `;
      case 'three':
        return css`
          font-size: 18px;
          font-weight: 700;
        `;
    }
  }}
`;

const styledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;

  text-align: ${({ textAlign }) => textAlign};

  ${({ fontColor, theme }) => {
    switch (fontColor) {
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
          color: ${theme.colors.feedback.negative};
        `;

      default:
        return css`
          color: ${theme.colors.gray300};
        `;
    }
  }}
`;

const StyledCaption = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 400;
`;

export default { StyledTitle, styledParagraph, StyledCaption };
