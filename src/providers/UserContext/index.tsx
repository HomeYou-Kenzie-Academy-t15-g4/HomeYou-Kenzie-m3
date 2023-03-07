import { createContext, useEffect, useState } from 'react';
import { IUserContext, IUserProviderProps } from './type';
import { api } from '../../services/api';
import { IRegisterForm } from '../../components/Forms/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  // const navigate = useNavigate();

  const createUser = async (data: IRegisterForm): Promise<void> => {
    const newData = {
      email: data.email,
      name: data.name,
      age: data.age,
      password: data.password,
      img: 'https://canvas.kenzie.com.br/images/messages/avatar-50.png',
    };
    try {
      const res = await api.post('/users', newData);
      console.log('deu certo', newData);
      // toast.success('Cadastro realizado com sucesso!');
      // navigate('/');
    } catch (error) {
      console.log('deu errado');
      // toast.error('Ops,algo deu errado!');
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{
          createUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
