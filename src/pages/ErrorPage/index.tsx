import imgLogo from '../../assets/notfound.svg';
import { Link } from 'react-router-dom';
import StyledDivNotFound from './style';

const ErrorPage = () => {
  return (
    <StyledDivNotFound>
      <div className='box'>
        <h2>Ops.. Página não encontrada</h2>
        <Link to={'/'}>Voltar</Link>
        <img src={imgLogo} alt='Not Found Page' />
      </div>
    </StyledDivNotFound>
  );
};

export default ErrorPage;
