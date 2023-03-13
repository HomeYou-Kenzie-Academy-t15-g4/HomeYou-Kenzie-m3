import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { ModalsContext } from '../../providers/ModalsContext';
import Footer from '../../components/Footer';
import EditUser from '../../components/Forms/EditUser';
import HouseDashCard from '../../components/Cards/DashCards/UserHousesCard';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { UserContext } from '../../providers/UserContext';
import { StyledContainerPage } from './style';
import ManageHouseModal from '../../components/Modal/ManageHouseModal';
import CreateHouseModal from '../../components/Modal/CreateHouseModal';
import UserRentsCards from '../../components/Cards/DashCards/UserRentsCard';

import UsserInfoard from '../../components/Cards/UserInfoCard';
import { Container } from '../../styles/global';

import { HousesContext } from '../../providers/HousesContext';
import UsserInfocard from '../../components/Cards/UserInfoCard';
import ReservForm from '../../components/Forms/ReservForm';

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
      {isOpen ? (
        isUserModal ? (
          <Modal title={'Atualizar foto'}>
            <EditUser />
          </Modal>
        ) : isManageRentModal ? (
          <Modal title={'Editar reserva'}>
            <ReservForm />
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

      <Container>
        <section className='info-section'>
          <UsserInfocard />

          <section className='user-cards'>
            <HouseDashCard />
            <UserRentsCards />
          </section>
        </section>
      </Container>
      <Footer />
    </StyledContainerPage>
  );
};

export default DashboardPage;
