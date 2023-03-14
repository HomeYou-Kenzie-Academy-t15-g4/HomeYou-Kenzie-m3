import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton, StyledButtonLink } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typograthy';
import Input from '../Input';
import { LoginFormSchema } from './LoginFormSchema';
import { ILoginFormValue } from './types';
import { CgSpinnerTwo } from 'react-icons/cg';

const LoginForm = () => {
  const { loginUser, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValue>({
    resolver: yupResolver(LoginFormSchema as any),
  });

  const submit: SubmitHandler<ILoginFormValue> = (formData) => {
    loginUser(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />

      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />

      <StyledButton type='submit' $buttonSize='large' $buttonStyle='primary'>
        {loading ? <CgSpinnerTwo className='spinner' /> : 'Entrar'}
      </StyledButton>

      <StyledParagraph $textAlign='center' $fontColor='grey'>
        Ainda não tem uma conta?
      </StyledParagraph>

      <StyledButtonLink
        to='/register'
        $buttonSize='large'
        $buttonStyle='default'
      >
        Cadastre-se
      </StyledButtonLink>
    </StyledForm>
  );
};

export default LoginForm;
