import { ReactNode } from 'react';
import { PropsValue } from 'react-select';
import * as yup from 'yup';
import { IAccommodation } from '../../../providers/HousesContext/types';
import { houseSchema } from './validations';

export interface IHouseForm extends yup.InferType<typeof houseSchema> {
  id?: number;
  name: string;
  photos: string[];
  city: string;
  state: string;
  dailyPrice: number;
  singleBed: number;
  doubleBed: number;
  services: string[];
  houseDesc: string;
}

export interface IDefaultHouseFormValues {
  name: string;
  photos:
    | PropsValue<{
        value: string;
        label: string;
      } | null>
    | undefined;
  state: string;
  city: string;
  dailyPrice: number | string;
  singleBed: number | string;
  doubleBed: number | string;
  services: string[];
  houseDesc: string;
  id?: number;  
  accommodation?: IAccommodation;
}

export interface IHouseFormProps {
  children: ReactNode;
  submitFunction: (dataHouse: IHouseForm) => Promise<void>;
  defaultHouseFormValues?: IDefaultHouseFormValues;
}
