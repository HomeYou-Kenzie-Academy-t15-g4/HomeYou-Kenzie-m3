import React, { useContext } from 'react';
import CommentsCard from '../../components/Cards/CommentsCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { ModalsContext } from '../../providers/ModalsContext';

const HousePage = () => {
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
      <CommentsCard />
    </div>
  );
};

export default HousePage;
