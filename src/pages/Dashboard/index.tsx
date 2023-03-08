import React, { useContext } from 'react';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';

const DashboardPage = () => {
  const { isOpen, setIsOpen } = useContext(UserContext);

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

export default DashboardPage;
