import Input from '../Input';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { TextField } from '@mui/material';
import { RegisterFormSchema } from './RegisterFormSchema';
import { UserContext } from '../../../providers/UserContext';
import { StyledParagraph } from '../../../styles/typograthy';
import { CgSpinnerTwo } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number | string;
}

const RegisterForm = () => {
  const { createUser, loading } = useContext(UserContext);
  const [birthDate, setBirthDate] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterFormSchema as any),
  });

  const ageHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
    setValue('age', event.target.value);
    clearErrors('age');
  };

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
      <fieldset
        style={{ display: 'flex', flexDirection: 'column', border: 'none' }}
      >
        <TextField
          id='date'
          label='Data de nascimento'
          type='date'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ageHandleChange(e)
          }
          value={birthDate}
          // error={errors.age?true:false}
          // helperText={errors.age?.message}
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={
            register('age') as unknown as React.RefObject<HTMLInputElement>
          }
        />
        <StyledParagraph $fontColor='red'>
          {errors.age?.message}
        </StyledParagraph>
      </fieldset>

      <Link className='linkToLogin' to={'/login'}>
        <StyledParagraph  $fontColor='grey'>
          Já tem uma conta? Clique aqui
        </StyledParagraph>
      </Link>

      <StyledButton type='submit' $buttonSize='large' $buttonStyle='primary'>
        {loading ? <CgSpinnerTwo className='spinner' /> : 'Criar Conta'}
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
