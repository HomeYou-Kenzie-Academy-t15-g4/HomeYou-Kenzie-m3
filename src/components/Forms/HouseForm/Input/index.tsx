import { forwardRef, InputHTMLAttributes } from 'react';
// import { TextFieldProps } from '@mui/material';
import {
  FieldError,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
// import { StyledInput } from '../../../../src/components/Forms/Input/style';
import { IHouseForm } from '../index';

interface IInputProps {
  label?: string | undefined;
  error?: FieldError | undefined;
  register: UseFormRegister<IHouseForm>;
  placeholder: string;
  type: string;
  value?: number | string;
  onChange?: (dateString: string) => number;
  name: 'houseName' | 'photos' | 'city' | 'state' | 'dailyPrice' | 'singleBed' | 'doubleBed' | 'services';
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
