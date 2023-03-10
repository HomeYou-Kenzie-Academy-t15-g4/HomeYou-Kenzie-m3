import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { ModalsContext } from '../../providers/ModalsContext';

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
      <button type='button' onClick={() => setIsOpen(true)}>
        Abrir
      </button>
      <Footer />
    </div>
  );
};

export default HomePage;
