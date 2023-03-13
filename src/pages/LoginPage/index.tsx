import react, { useState, useEffect } from 'react';
import LoginForm from '../../components/Forms/LoginForm';
import { StyledParagraph, StyledTitle } from '../../styles/typograthy';
import { StyledLoginPage } from './style';
import loginImg from '../../assets/login-asside-img.svg';
import logo from '../../assets/HomeYou.svg';

const LoginPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleReSize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  const showSection = screenWidth > 900;

  return (
    <StyledLoginPage>
      {showSection && (
        <section className='image-section'>
          <div>
            <img src={loginImg} alt='' />
          </div>
        </section>
      )}
      <div className='login-box'>

        <img src={logo} alt='' />
      <section className='form-section'>
        <div className='text-container'>
          <StyledParagraph $fontColor='grey'>Bem vindo</StyledParagraph>
          <StyledTitle $fontColor='grey' tag='h3' $fontSize='three'>
            Faça login na sua conta
          </StyledTitle>
        </div>
        <div className='form-container'>
          <LoginForm />
        </div>
      </section>
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
