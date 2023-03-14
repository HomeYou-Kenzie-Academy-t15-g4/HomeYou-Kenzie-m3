import { ReactNode } from 'react';
import { PropsValue } from 'react-select';
import {
  IHouseForm,
  IDefaultHouseFormValues,
} from '../../components/Forms/HouseForm/types';

export interface IHousesProviderProps {
  children: ReactNode;
}

export interface IHouse {
  id?: number;
  userId?: number;
  name: string;
  photos:
    | string[]
    | PropsValue<{
        value: string;
        label: string;
      } | null>
    | undefined;
  city: string;
  state: string;
  dailyPrice: number | any;
  services: string[];
  accommodation: IAccommodation;
  houseDesc: string;
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
  formData?: any;
  id?: number;
  userId?: number;
  guestNumber: string;
  rentPrice: number;
  rentedDays: Date[];
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
  guestNumber?: string;
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
  selectedHouse: IHouse | InoDefaultValue | IDefaultHouseFormValues | null;
  setSelectedHouse: React.Dispatch<
    React.SetStateAction<
      IHouse | IDefaultHouseFormValues | InoDefaultValue | null
    >
  >;
  selectedRent: IRent | null;
  setSelectedRent: React.Dispatch<React.SetStateAction<IRent | null>>;
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
  selectedDate: Date[] | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date[] | null>>;
}

export interface InoDefaultValue {
  name: undefined;
  photos: null;
  state: null;
  city: null;
  dailyPrice: undefined;
  singleBed: undefined;
  doubleBed: undefined;
  services: null;
  id?: number;
  accommodation?: {
    beds: number;
    doubleBeds: number;
  };
  houseDesc: undefined;
}
