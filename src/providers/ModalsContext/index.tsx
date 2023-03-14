import { createContext, useContext, useState } from 'react';
import { defaultNoValues } from '../../components/Forms/HouseForm/servicesOptions';
import { HousesContext } from '../HousesContext';
import { IModalsContext, IModalsProviderProps } from './type';

export const ModalsContext = createContext({} as IModalsContext);

export const ModalsProvider = ({ children }: IModalsProviderProps) => {
  const { loadOneHouse, setSelectedHouse, setLoadValues, setSelectedRent } =
    useContext(HousesContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isUserModal, setIsUserModal] = useState(false);
  const [isCreateRentModal, setIsCreateRentModal] = useState(false);
  const [isManageRentModal, setIsManageRentModal] = useState(false);
  const [isManageHouseModal, setIsManageHouseModal] = useState(false);
  const [isCreateHouseModal, setIsCreateHouseModal] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const callEditUser = () => {
    setIsOpen(true);
    setIsUserModal(true);
    window.scroll(0, 0);
  };

  const callManageHouse = (id: number) => {
    loadOneHouse(id);
    setIsOpen(true);
    setIsManageHouseModal(true);
    window.scroll(0, 0);
  };

  const callCreateHouse = () => {
    setIsOpen(true);
    setIsCreateHouseModal(true);
    window.scroll(0, 0);
  };

  const callCreateReserve = () => {
    setIsOpen(true);
    setIsCreateHouseModal(true);
    window.scroll(0, 0);
  };

  const callManageReserve = () => {
    setIsOpen(true);
    setIsManageRentModal(true);
    setDeleteButton(true);
    window.scroll(0, 0);
  };

  const closeModal = () => {
    if (window.location.pathname !== '/house') {
      setSelectedHouse(null);
    }
    setLoadValues(defaultNoValues);
    setIsOpen(false);
    setIsUserModal(false);
    setIsCreateRentModal(false);
    setIsManageRentModal(false);
    setIsCreateHouseModal(false);
    setIsManageHouseModal(false);
    setDeleteButton(false);
    setIsOpenCalendar(false);
    setSelectedRent(null);
  };

  const closeModalCalendar = () => {
    setIsOpenCalendar(false);
  };

  return (
    <>
      <ModalsContext.Provider
        value={{
          isOpen,
          setIsOpen,
          isUserModal,
          setIsUserModal,
          isCreateRentModal,
          setIsCreateRentModal,
          isManageRentModal,
          setIsManageRentModal,
          isCreateHouseModal,
          setIsCreateHouseModal,
          isManageHouseModal,
          setIsManageHouseModal,
          isOpenCalendar,
          setIsOpenCalendar,
          callEditUser,
          callManageHouse,
          callCreateHouse,
          callCreateReserve,
          callManageReserve,
          closeModalCalendar,
          closeModal,
          deleteButton,
          setDeleteButton,
        }}
      >
        {children}
      </ModalsContext.Provider>
    </>
  );
};
