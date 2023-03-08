import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { ILoginFormValue } from './types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit: SubmitHandler<ILoginFormValue> = (formData) => {
    // função login
    reset();
  };

  return (
    <form>
      <fieldset>
        <label>Email</label>
        <input type='email' id='email' {...register('email')} />
      </fieldset>
      <fieldset>
        <label>Senha</label>
        <input type='password' id='password' {...register('password')} />
      </fieldset>

      <button type='submit'>Entrar</button>
    </form>
  );
};

export default LoginForm;
