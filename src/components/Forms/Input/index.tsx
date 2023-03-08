import { forwardRef, InputHTMLAttributes } from 'react';
// import { TextFieldProps } from '@mui/material';
import {
  FieldError,
  UseFormRegister
} from 'react-hook-form';
// import { StyledInput } from '../../../../src/components/Forms/Input/style';
import { IRegisterForm } from '../RegisterForm';

interface IInputProps {
  label?: string | undefined;
  error?: FieldError | undefined;
  register: UseFormRegister<IRegisterForm>;
  placeholder: string;
  type: string;
  value?: number | string;
  onChange?: (dateString: string) => number;
  name: 'name' | 'email' | 'password' | 'confirmPassword' | 'age';
}

const Input = ({
  label,
  error,
  name,
  type,
  register,
  placeholder,
  value,
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
