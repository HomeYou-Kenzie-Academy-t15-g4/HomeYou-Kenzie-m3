import { ReactNode } from 'react';
import { IHouseForm, IDefaultHouseFormValues } from '../../components/Forms/HouseForm/types';

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
  accommodation: IAccommodation;
}

export interface IAccommodation {
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
  selectedHouse: IHouse | InoDefaultValue | null;
  setSelectedHouse: React.Dispatch<React.SetStateAction<IHouse | InoDefaultValue | null>>;
  selectedRent: IHouse | null;
  setSelectedRent: React.Dispatch<React.SetStateAction<IHouse | null>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  createHouse: (dataHouse: IHouseForm) => Promise<void>;
  editHouse: (dataHouse: IHouseForm) => Promise<void>;
  deleteHouse: () => Promise<void>;
  createReserve: (newRent: IReserve) => Promise<void>;
  editReserve: (editedReserve: IReserve, id: number) => Promise<void>;
  deleteReserve: (id: number) => Promise<void>;
  loadOneHouse: (id: number) => Promise<void>;
  loadValues: IDefaultHouseFormValues;
  setLoadValues: React.Dispatch<React.SetStateAction<IDefaultHouseFormValues>>;
  housesRent: IRent[];
}

export interface InoDefaultValue {
  houseName: undefined;
    photos: null;
    state: null;
    city: null;
    dailyPrice: undefined;
    singleBed: undefined;
    doubleBed: undefined;
    services: null;
}