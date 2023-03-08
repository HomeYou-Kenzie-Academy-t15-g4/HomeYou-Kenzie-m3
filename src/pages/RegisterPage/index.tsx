import React from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import { StyledDivRegisterPage } from './style';
import Header from '../../components/Header';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <StyledDivRegisterPage>
        <section>
          <img src='../../../src/assets/HomeYou.svg' alt='' />
          <RegisterForm />
        </section>
        <aside>
          <img src='../../assets/register-asside-img.svg' alt='' />
        </aside>
      </StyledDivRegisterPage>
    </>
  );
};

export default RegisterPage;
