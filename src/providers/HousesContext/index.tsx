import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  IHouse,
  IHousesContext,
  IHousesProviderProps,
  InoDefaultValue,
  IRent,
  IReserve,
} from './types';
import { defaultNoValues } from '../../components/Forms/HouseForm';
import { statesDatabase } from '../../components/Modal/ManageHouseModal/statesDatabase';
import {
  IDefaultHouseFormValues,
  IHouseForm,
} from '../../components/Forms/HouseForm/types';

export const HousesContext = createContext<IHousesContext>(
  {} as IHousesContext
);

export const HousesProvider = ({ children }: IHousesProviderProps) => {
  const [housesList, setHousesList] = useState<IHouse[]>([]);
  const [housesRent, setHousesRent] = useState<IRent[]>([]);
  const [housesFilterList, setHousesFilterList] = useState<IHouse[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<
    IHouse | InoDefaultValue | null
  >(null);
  const [selectedRent, setSelectedRent] = useState<IHouse | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [loadValues, setLoadValues] =
    useState<IDefaultHouseFormValues>(defaultNoValues);

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

  useEffect(() => {
    const loadRent = async () => {
      const token = localStorage.getItem('@HomeYou:TOKEN');
      if (token) {
        try {
          const res = await api.get('/rents');
          setHousesRent(res.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    loadRent();
  }, []);

  // const loadHouseInfo = (productID: number): void => {
  //   const findHouse = housesList.find((houses) => houses.id === productID);
  //   setSelectedHouse(findHouse);
  // };

  const createHouse = async (dataHouse: IHouseForm): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    const userAuxString = localStorage.getItem('@HomeYou:User');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;

    if (userAux && token) {
      const newHouse = {
        name: dataHouse.name,
        ownerName: userAux.name,
        userId: userAux.id,
        photos: dataHouse.photos,
        city: dataHouse.city,
        state: dataHouse.state,
        daylyPrice: dataHouse.daylyPrice,
        accommodation: {
          beds: dataHouse.singleBed,
          doubleBeds: dataHouse.doubleBed,
        },
        services: dataHouse.services,
        houseDesc: dataHouse.houseDesc,
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

  const loadOneHouse = async (id: number): Promise<void> => {
    try {
      const response = await api.get(`/houses/${id}`);
      setSelectedHouse(response.data);
      const stateUF = statesDatabase.find(
        (e) => e.sigla === response.data?.state
      );
      const values = {
        name: response.data?.name,
        photos: response.data?.photos.map((photo: string) => ({
          value: photo,
          label: photo,
        })),
        state: stateUF ? stateUF.id : null,
        city: { value: response.data?.city, label: response.data?.city },
        daylyPrice: response.data?.daylyPrice,
        singleBed: response.data?.accommodation.beds,
        doubleBed: response.data?.accommodation.doubleBeds,
        services: response.data?.services.map((service: string) => ({
          value: service,
          label: service,
        })),
        houseDesc: response.data?.houseDesc
      };

      setLoadValues(values);
    } catch (error) {
      console.error(error);
      toast.error('Falha ao carregar dados da casa');
      // navigate('/');
    }
  };

  const editHouse = async (dataHouse: IHouseForm): Promise<void> => {
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    const houseId = selectedHouse?.id;
    if (token && houseId) {
      const editHouse = {
        name: dataHouse.name,
        photos: dataHouse.photos,
        city: dataHouse.city,
        state: dataHouse.state,
        daylyPrice: dataHouse.daylyPrice,
        accommodation: {
          beds: dataHouse.singleBed,
          doubleBeds: dataHouse.doubleBed,
        },
        services: dataHouse.services,
        houseDesc: dataHouse.houseDesc,
      };
      try {
        const response = await api.patch(`/houses/${houseId}`, editHouse, {
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
    }
  };

  const deleteHouse = async (): Promise<void> => {
    const houseId = selectedHouse?.id;
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    if (houseId && token) {
      try {
        const response = await api.delete(`/houses/${houseId}`, {
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
        loadOneHouse,
        loadValues,
        setLoadValues,
        housesRent,
      }}
    >
      {children}
    </HousesContext.Provider>
  );
};
