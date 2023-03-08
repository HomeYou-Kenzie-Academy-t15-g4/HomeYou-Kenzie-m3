import React from 'react';
import LoginForm from '../../components/Forms/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <aside>
        {/* <img src='../../assets/login-asside-img.svg' alt='' /> */}
      </aside>
      <section>
        <img src='../../../src/assets/HomeYou.svg' alt='' />
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
