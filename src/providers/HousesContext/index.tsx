import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  IHouse,
  IHousesContext,
  IHousesProviderProps,
  IReserve,
} from './types';
import { IHouseForm } from '../../components/Forms/HouseForm';

export const HousesContext = createContext<IHousesContext>(
  {} as IHousesContext
);

export const HousesProvider = ({ children }: IHousesProviderProps) => {
  const [housesList, setHousesList] = useState<IHouse[]>([]);
  const [housesFilterList, setHousesFilterList] = useState<IHouse[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<IHouse[]>([]);
  const [selectedRent, setSelectedRent] = useState<IHouse[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const filter = housesList.filter(
      (element) =>
        element.name.toLowerCase().includes(searchText.toLowerCase()) ||
        element.city.toLowerCase().includes(searchText.toLowerCase()) ||
        element.state.toLowerCase().includes(searchText.toLowerCase()) ||
        element.services.includes(searchText.toLowerCase())
    );
    setHousesFilterList(filter);
  }, [searchText]);

  useEffect(() => {
    const loadHouses = async (): Promise<void> => {
      try {
        const response = await api.get('/houses');
        setHousesList(response.data);
        setHousesFilterList(response.data);
      } catch (error) {
        window.localStorage.clear();
        setHousesList([]);
        toast.error('Não foi possivel acessar as casas');
      }
    };
    loadHouses();
  }, []);

  // const loadHouseInfo = (productID: number): void => {
  //   const findHouse = housesList.find((houses) => houses.id === productID);
  //   setSelectedHouse(findHouse);
  // };

  const createHouse = async (newHouseInputs: IHouseForm): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    const userAuxString = localStorage.getItem('@HomeYou:User');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;

    if (userAux && token) {
      const newHouse = {
        ownerName: userAux.name,
        userId: userAux.id,
        photos: newHouseInputs.photos,
        city: newHouseInputs.city,
        state: newHouseInputs.state,
        daylyPrice: newHouseInputs.dailyPrice,
        accommodation: {
          beds: newHouseInputs.singleBed,
          doubleBeds: newHouseInputs.doubleBed,
        },
        services: newHouseInputs.services,
      };
      try {
        const response = await api.post('/houses', newHouse, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success('Casa cadastrada com sucesso');
      } catch (error) {
        console.error(error);
        toast.error('Falha ao cadastrar casa');
        // navigate('/');
      }
    }
  };

  const editHouse = async (editedHouse: IHouse, id: number): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    try {
      const response = await api.patch(`/houses/${id}`, editedHouse, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Casa atualizada com sucesso');
    } catch (error) {
      console.error(error);
      toast.error('Falha ao atualizar casa');
      // navigate('/');
    }
  };

  const deleteHouse = async (id: number): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    try {
      const response = await api.delete(`/houses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Casa deletada com sucesso');
    } catch (error) {
      console.error(error);
      toast.error('Falha ao deletar casa');
      // navigate('/');
    }
  };

  const createReserve = async (newRent: IReserve): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    const userAuxString = localStorage.getItem('@HomeYou:User');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;

    if (userAux) {
      try {
        const response = await api.post('/rents', newRent, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success('Casa reservada com sucesso');
      } catch (error) {
        console.error(error);
        toast.error('Falha ao reservar casa');
        // navigate('/');
      }
    }
  };

  const editReserve = async (
    editedReserve: IReserve,
    id: number
  ): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    try {
      const response = await api.patch(`/rents/${id}`, editedReserve, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Reserva atualizada com sucesso');
    } catch (error) {
      console.error(error);
      toast.error('Falha ao atualizar reserva');
      // navigate('/');
    }
  };

  const deleteReserve = async (id: number): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    try {
      const response = await api.delete(`/rents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Casa deletada com sucesso');
    } catch (error) {
      console.error(error);
      toast.error('Falha ao deletar casa');
      // navigate('/');
    }
  };

  return (
    <HousesContext.Provider
      value={{
        housesList,
        setHousesList,
        housesFilterList,
        setHousesFilterList,
        selectedHouse,
        setSelectedHouse,
        selectedRent,
        setSelectedRent,
        searchText,
        setSearchText,
        createHouse,
        editHouse,
        deleteHouse,
        createReserve,
        editReserve,
        deleteReserve,
      }}
    >
      {children}
    </HousesContext.Provider>
  );
};
