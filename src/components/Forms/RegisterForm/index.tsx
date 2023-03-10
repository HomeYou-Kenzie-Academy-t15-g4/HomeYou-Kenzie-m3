import Input from '../Input';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext/index';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { TextField } from '@mui/material';
import { RegisterFormSchema } from './RegisterFormSchema';

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number | string;
}

const RegisterForm = () => {
  const [age, setAge] = useState<number>();
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterFormSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(createUser)}>
      <Input
        type='text'
        error={errors.name}
        register={register('name')}
        label='Nome'
      />

      <Input
        type='email'
        error={errors.email}
        register={register('email')}
        label='Email'
      />

      <Input
        type='password'
        error={errors.password}
        register={register('password')}
        label='Senha'
      />
      <Input
        type='password'
        error={errors.confirmPassword}
        register={register('confirmPassword')}
        label='Confirmar Senha'
      />

      <TextField
        id='date'
        label='Data de nascimento'
        type='date'
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={
          register('age') as unknown as React.RefObject<HTMLInputElement>
        }
      />

      <StyledButton type='submit' $buttonSize='large' $buttonStyle='primary'>
        Criar conta
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
