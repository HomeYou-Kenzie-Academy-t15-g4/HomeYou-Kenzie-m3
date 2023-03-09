import React, { useContext } from 'react';
import CommentsCard from '../../components/Cards/CommentsCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';

const HousePage = () => {
  const { isOpen, setIsOpen } = useContext(UserContext);
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
    </div>
  );
};

export default HousePage;
