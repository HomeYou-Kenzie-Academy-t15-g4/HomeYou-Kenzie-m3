import { forwardRef, InputHTMLAttributes } from 'react';
// import { TextFieldProps } from '@mui/material';
import {
  FieldError,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
// import { StyledTextField } from '../../../styles/form';
// import { StyledParagraph } from '../../../styles/typography';
import { IRegisterForm } from '../RegisterForm';

interface IInputProps {
  label?: string | undefined;
  error?: FieldError | undefined;
  register: UseFormRegister<IRegisterForm>;
  placeholder: string;
  type: string;
  name: 'name' | 'email' | 'password' | 'confirmPassword' | 'age';
}

const Input = ({
  label,
  error,
  name,
  type,
  register,
  placeholder,
}: IInputProps) => (
  <fieldset>
    <input
      placeholder={placeholder}
      {...register(name)}
      //   label={label}
      type={type}
    />
    <p>{error?.message}</p>
  </fieldset>
);

export default Input;
