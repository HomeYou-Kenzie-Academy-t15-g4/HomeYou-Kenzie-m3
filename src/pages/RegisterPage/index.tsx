import React from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import { StyledDivRegisterPage } from './style';

const RegisterPage = () => {
  return (
    <StyledDivRegisterPage>
      <img src='../../../src/assets/HomeYou.svg' alt='' />
      <RegisterForm />
    </StyledDivRegisterPage>
  );
};

export default RegisterPage;
