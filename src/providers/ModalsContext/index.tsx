import { createContext, useContext, useState } from 'react';
import { defaultNoValues } from '../../components/Forms/HouseForm';
import { HousesContext } from '../HousesContext';
import { IModalsContext, IModalsProviderProps } from './type';

export const ModalsContext = createContext({} as IModalsContext);

export const ModalsProvider = ({ children }: IModalsProviderProps) => {
  const { loadOneHouse, setSelectedHouse } = useContext(HousesContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isUserModal, setIsUserModal] = useState(false);
  const [isCreateRentModal, setIsCreateRentModal] = useState(false);
  const [isManageRentModal, setIsManageRentModal] = useState(false);
  const [isManageHouseModal, setIsManageHouseModal] = useState(false);
  const [isCreateHouseModal, setIsCreateHouseModal] = useState(false);

  const callEditUser = () => {
    setIsOpen(true)
    setIsUserModal(true)    
  }
 
  const callManageHouse = (id: number) => {
    loadOneHouse(id)
    setIsOpen(true)
    setIsManageHouseModal(true)
  }
  
  const callCreateHouse = () => {
    setSelectedHouse(defaultNoValues)
    setIsOpen(true)
    setIsCreateHouseModal(true)
  }

  const callCreateReserve = () => {
    setIsOpen(true)
    setIsCreateHouseModal(true)
  }

  const callManageReserve = () => {
    setIsOpen(true)
    setIsCreateHouseModal(true)
  }

  const closeModal = () => {    
    setIsOpen(false)
    setIsUserModal(false)
    setIsCreateRentModal(false)
    setIsManageRentModal(false)
    setIsCreateHouseModal(false)
    setIsManageHouseModal(false)
  }

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
          callEditUser,
          callManageHouse,
          callCreateHouse,
          callCreateReserve,
          callManageReserve,
          closeModal
        }}
      >
        {children}
      </ModalsContext.Provider>
    </>
  );
};