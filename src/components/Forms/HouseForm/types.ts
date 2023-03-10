import { ReactNode } from "react";
import { PropsValue } from "react-select";
import * as yup from 'yup';
import { houseSchema } from ".";


export interface IHouseForm extends yup.InferType<typeof houseSchema> {
  id?: number;
  houseName: string;
  photos: string[];
  city: string;
  state: string;
  dailyPrice: number;
  singleBed: number;
  doubleBed: number;
  services: string[];
}

export interface IDefaultHouseFormValues {
  name: undefined | string;
  photos:
    | PropsValue<{
        value: string;
        label: string;
      } | null>
    | undefined;
  state: null | number;
  city:
    | PropsValue<{
        value: string;
        label: string;
      } | null>
    | undefined;
  daylyPrice: undefined | number;
  singleBed: undefined | number;
  doubleBed: undefined | number;
  services: null | PropsValue<{
    value: string;
    label: string ;
  } | null>;
}

export interface IHouseFormProps {
  children: ReactNode;
  submitFunction: (dataHouse: IHouseForm) => Promise<void>;
  defaultHouseFormValues?: IDefaultHouseFormValues;
}