import imgLogo from '../../assets/notfound.svg';
import { Link, useNavigate } from 'react-router-dom';
import StyledDivNotFound from './style';
import { useEffect, useState } from 'react';
import { StyledTitle } from '../../styles/typograthy';
import { StyledButton } from '../../styles/button';

const ErrorPage = () => {
  const [segundos, setSegundos] = useState(5);
  const [point, setPoint] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (segundos === 0) {
        clearInterval(intervalId);
        navigate('/');
      } else {
        setPoint(point + '.')
        setSegundos(segundos - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [segundos]);
  return (
    <StyledDivNotFound>
      <div className='box'>
        <img src={imgLogo} alt='Not Found Page' />
        
      <StyledTitle tag='h1' $fontSize='one' $fontColor='grey' $textAlign='center' >Ops.. Página não encontrada.</StyledTitle>
        <Link to={'/'}><StyledButton $buttonSize='large' $buttonStyle='primary'>Voltar</StyledButton></Link>
        <div className='insideBox'>
          <StyledTitle tag='h2' $fontSize='two' $fontColor='grey' $textAlign='center' >Você será redirecionado automáticamente em {segundos} segundos.{point}</StyledTitle>
        </div>
      </div>
    </StyledDivNotFound>
  );
};

export default ErrorPage;
