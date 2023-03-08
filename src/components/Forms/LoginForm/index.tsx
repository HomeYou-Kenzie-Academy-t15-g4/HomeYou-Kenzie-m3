import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
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
    loginUser(formData)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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
