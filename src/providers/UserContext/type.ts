import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IRegisterForm } from '../../components/Forms/RegisterForm';

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  createUser: (data: IRegisterForm) => void;
}
