import { ReactNode } from 'react';
import { IHouseForm } from '../../components/Forms/HouseForm';

export interface IHousesProviderProps {
  children: ReactNode;
}

export interface IHouse {
  id?: number;
  userId?: number;
  name: string;
  photos: string[];
  city: string;
  state: string;
  daylyPrice: number;
  services: string[];
  acommodation: IAcommodation;
}

export interface IAcommodation {
  beds: number;
  doubleBeds: number;
}

export interface IGuest {
  photo: string;
  name: string;
}

export interface IReserve {
  id?: number;
  userId?: number;
  rentPrice: number;
  rentedDays: string[];
  guest: IGuest;
  house: Pick<IHouse, 'id' | 'name' | 'photos'>;
}

export interface IRent {
  userId: number;
  house: IHouseRent;
  guest: IRentGuest;
  rentedDays: string[];
  rentPrice: number;
  id: number;
}

export interface IHouseRent {
  id: number;
  name: string;
  photos: string[];
}

export interface IRentGuest {
  photo: string;
  name: string;
}

export interface IHousesContext {
  housesList: IHouse[];
  setHousesList: React.Dispatch<React.SetStateAction<IHouse[]>>;
  housesFilterList: IHouse[];
  setHousesFilterList: React.Dispatch<React.SetStateAction<IHouse[]>>;
  selectedHouse: IHouse[];
  setSelectedHouse: React.Dispatch<React.SetStateAction<IHouse[]>>;
  selectedRent: IHouse[];
  setSelectedRent: React.Dispatch<React.SetStateAction<IHouse[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  createHouse: (newHouse: IHouseForm) => Promise<void>;
  editHouse: (editedHouse: IHouse, id: number) => Promise<void>;
  deleteHouse: (id: number) => Promise<void>;
  createReserve: (newRent: IReserve) => Promise<void>;
  editReserve: (editedReserve: IReserve, id: number) => Promise<void>;
  deleteReserve: (id: number) => Promise<void>;
  housesRent: IRent[];
}
