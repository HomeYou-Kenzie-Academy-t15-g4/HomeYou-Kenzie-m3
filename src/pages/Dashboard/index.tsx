import React from 'react';
import HouseDashCard from '../../components/Cards/DashCards/HouseDashCard';
import React, { useContext } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';

const DashboardPage = () => {
  const { isOpen, setIsOpen } = useContext(UserContext);
  return (
    <div>
      <HouseDashCard />
      {isOpen ? (
        <Modal>
          <div></div>
        </Modal>
      ) : null}
      <Header />
      <button type='button' onClick={() => setIsOpen(true)}>
        Abrir
      </button>
      <HouseDashCard />
      <Footer />
    </div>
  );
};

export default DashboardPage;