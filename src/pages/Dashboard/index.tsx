import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import Footer from '../../components/Footer';
import EditUser from '../../components/Forms/EditUser';
import HouseDashCard from '../../components/Cards/DashCards/HouseDashCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';
import { StyledSectionProfile, StyledContainerPage } from './style';

const DashboardPage = () => {
  const { isOpen, setIsOpen, user } = useContext(UserContext);

  return (
    <StyledContainerPage>
      <div>
        {isOpen ? (
          <Modal>
            <EditUser />
          </Modal>
        ) : null}
        <Header />

        <StyledSectionProfile>
          <div className='contentSection'>
            <div className='contentImage'>
              <img src={user?.img} alt='photo image' />
              <div>
                <h3>{user?.name}</h3>
                <span>{user?.age}</span>
                <hr />
                <div>
                  <AiOutlineUser />
                  <button type='button' onClick={() => setIsOpen(true)}>
                    Editar Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StyledSectionProfile>
        <HouseDashCard />
        <section></section>
        <Footer />
      </div>
    </StyledContainerPage>
  );
};

export default DashboardPage;
