import React from 'react';
import LoginForm from '../../components/Forms/LoginForm';
import Header from '../../components/Header';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <aside>
        <img src='../../../src/assets/login-asside-img.svg' alt='' />
      </aside>
      <section>
        <img src='../../../src/assets/HomeYou.svg' alt='' />
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
