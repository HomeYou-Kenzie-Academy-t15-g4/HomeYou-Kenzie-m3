import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { StyledParagraph } from '../../../styles/typograthy';
import { CssTextField } from './style';
import { StyledFieldset } from './fieldSetStyled';

interface IInputProps {
  label: React.ReactNode;
  register: UseFormRegisterReturn<string>;
  type: 'text' | 'email' | 'password' | 'date';
  error?: FieldError;
  fontColor?: string;
}

const Input = ({ label, register, type, error }: IInputProps) => {
  return (
    <StyledFieldset>
      <CssTextField fullWidth label={label} type={type} {...register} />
      {error ? (
        <StyledParagraph $fontColor='red'>{error.message}</StyledParagraph>
      ) : null}
    </StyledFieldset>
  );
};

export default Input;
