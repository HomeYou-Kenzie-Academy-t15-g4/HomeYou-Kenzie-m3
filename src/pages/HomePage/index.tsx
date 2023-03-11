import { useContext, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Ratinng from '../../components/Rating';
import { ModalsContext } from '../../providers/ModalsContext';
import {
  StyledButton,
  StyledSectionHomePage,
  StyledRatingFavorite,
} from './style';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

const HomePage = () => {
  const { isOpen, setIsOpen } = useContext(ModalsContext);
  const [isLike, setIsLike] = useState(false);

  return (
    <div>
      {isOpen ? (
        <Modal>
          <div></div>
        </Modal>
      ) : null}
      <Header />
      <StyledSectionHomePage />

      <button type='button' onClick={() => setIsOpen(true)}>
        Abrir
      </button>
      <StyledRatingFavorite>
        <Ratinng />
        <StyledButton onClick={() => setIsLike(!isLike)}>
          {isLike ? <FcLikePlaceholder /> : <FcLike />}
        </StyledButton>
      </StyledRatingFavorite>

      <Footer />
    </div>
  );
};

export default HomePage;
