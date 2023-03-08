import React from 'react';
import Header from '../../components/Header';
import { UserContext } from '../../providers/UserContext';

const HousePage = () => {
  return (
    <div>
      <Header />
      <button type='button' onClick={() => setIsOpen(true)}>
        Abrir
      </button>
      {isOpen ? (
        <Modal>
          <div></div>
        </Modal>
      ) : null}
    </div>
  );
};

export default HousePage;
