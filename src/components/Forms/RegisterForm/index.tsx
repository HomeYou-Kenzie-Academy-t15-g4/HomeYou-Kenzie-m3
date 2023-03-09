import Input from '../Input';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext/index';
import { StyledForm, StyledDivReturnToLogin } from './style';
import Link from '../../../routes/routes';

const FormUser = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
  name: yup.string().required(),
  age: yup.string().required(),
});

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
    resolver: yupResolver(FormUser),
  });

  return (
    <StyledForm onSubmit={handleSubmit(createUser)}>
      <StyledDivReturnToLogin>
        <p>Cadastre-se</p>
      </StyledDivReturnToLogin>
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
      <Input
        type='date'
        error={errors.age}
        register={register('age')}
        label='Data de nascimento'
      />
      <button type='submit'>Criar conta</button>
    </StyledForm>
  );
};

export default RegisterForm;
