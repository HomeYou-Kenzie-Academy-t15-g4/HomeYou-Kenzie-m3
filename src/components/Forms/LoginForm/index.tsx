import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
import Input from '../Input';
import { ILoginFormValue } from './types';

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValue>();

  const submit: SubmitHandler<ILoginFormValue> = (formData) => {
    loginUser(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label='Email' type='email' register={register('email')} />
      <Input label='Senha' type='password' register={register('password')} />

      <button type='submit'>Entrar</button>
    </form>
  );
};

export default LoginForm;
