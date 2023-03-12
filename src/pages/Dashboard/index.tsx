import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { ModalsContext } from '../../providers/ModalsContext';
import Footer from '../../components/Footer';
import EditUser from '../../components/Forms/EditUser';
import HouseDashCard from '../../components/Cards/DashCards/UserHousesCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';
import { StyledSectionProfile, StyledContainerPage } from './style';
import ManageHouseModal from '../../components/Modal/ManageHouseModal';
import CreateHouseModal from '../../components/Modal/CreateHouseModal';
import UserRentsCards from '../../components/Cards/DashCards/UserRentsCard';
import { HousesContext } from '../../providers/HousesContext';

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { selectedHouse } = useContext(HousesContext);
  const {
    isOpen,
    isUserModal,
    isCreateRentModal,
    isManageRentModal,
    isCreateHouseModal,
    isManageHouseModal,
    callEditUser,
  } = useContext(ModalsContext);

  return (
    <StyledContainerPage>
      <div>
        {isOpen ? (
          isUserModal ? (
            <Modal title={'Atualizar foto'}>
              <EditUser />
            </Modal>
          ) : isCreateRentModal ? (
            <Modal title={`R$ ${selectedHouse?.daylyPrice} noite`}>
              <EditUser />
            </Modal>
          ) : isManageRentModal ? (
            <Modal title={'Editar reserva'}>
              <EditUser />
            </Modal>
          ) : isManageHouseModal ? (
            <Modal title={'Editar casa'}>
              <ManageHouseModal />
            </Modal>
          ) : isCreateHouseModal ? (
            <Modal title={'Cadastrar casa'}>
              <CreateHouseModal />
            </Modal>
          ) : null
        ) : null}

        <Header />
        <StyledSectionProfile>
          <div className='contentSection'>
            <div className='contentImage'>
              <img src={user?.img} alt='photo image' />
              <div>
                <h3>{user?.name}</h3>
                <span>{user?.age} anos</span>
                <hr />
                <div>
                  <AiOutlineUser />
                  <button type='button' onClick={() => callEditUser()}>
                    Editar Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StyledSectionProfile>
        <HouseDashCard />
        <UserRentsCards />
        <Footer />
      </div>
    </StyledContainerPage>
  );
};

export default DashboardPage;
