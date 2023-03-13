export interface IModalsProviderProps {
  children: React.ReactNode;
}

export interface IModalsContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isUserModal: boolean;
  setIsUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateRentModal: boolean;
  setIsCreateRentModal: React.Dispatch<React.SetStateAction<boolean>>;
  isManageRentModal: boolean;
  setIsManageRentModal: React.Dispatch<React.SetStateAction<boolean>>;
  isManageHouseModal: boolean;
  setIsManageHouseModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateHouseModal: boolean;
  setIsCreateHouseModal: React.Dispatch<React.SetStateAction<boolean>>;
  callEditUser: () => void;
  callManageHouse: (id: number) => void;
  callCreateHouse: () => void;
  callCreateReserve: () => void;
  callManageReserve: () => void;
  closeModal: () => void;
  closeModalCalendar: () => void;
  deleteButton: boolean;
  setDeleteButton: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenCalendar: Boolean;
  setIsOpenCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}
