import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';
import ReservForm from '../../components/Forms/ReservForm';
import { ModalsContext } from '../../providers/ModalsContext';
import StyledSectionHomePage from './style';

const HomePage = () => {
  const { isOpen, setIsOpen } = useContext(ModalsContext);

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

      <Footer />
    </div>
  );
};

export default HomePage;
