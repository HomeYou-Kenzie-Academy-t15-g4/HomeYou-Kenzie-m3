import 'styled-components';

declare module 'styled-components';
export interface IDefaultTheme {
  fonts: {
    primary: string;
  };
  colors: {
    primary: string;
    primaryFocus: string;

    secondary: string;

    grey400: string;
    grey300: string;
    grey200: string;
    grey100: string;
    grey00: string;

    white: string;
    black: string;

    feedbacks: {
      negative: string;
      warning: string;
      sucess: string;
      information: string;
    };
  };
}
