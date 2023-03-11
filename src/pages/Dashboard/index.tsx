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
import UsserInfoard from '../../components/Cards/UserInfoCard';
import { Container } from '../../styles/global';

const DashboardPage = () => {
  const { user } = useContext(UserContext);
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
            <Modal>
              <EditUser />
            </Modal>
          ) : isCreateRentModal ? (
            <Modal>
              <EditUser />
            </Modal>
          ) : isManageRentModal ? (
            <Modal>
              <EditUser />
            </Modal>
          ) : isManageHouseModal ? (
            <Modal>
              <ManageHouseModal />
            </Modal>
          ) : isCreateHouseModal ? (
            <Modal>
              <CreateHouseModal />
            </Modal>
          ) : null
        ) : null}

        <Header />
        <StyledSectionProfile>
          <Container>
            {/* <div className='contentSection'>
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
          </div> */}
            <UsserInfoard />
          </Container>
        </StyledSectionProfile>
        <HouseDashCard />
        <UserRentsCards />
        <Footer />
      </div>
    </StyledContainerPage>
  );
};

export default DashboardPage;
