import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { createContext, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  IHouse,
  IHousesContext,
  IHousesProviderProps,
  InoDefaultValue,
  IRent,
  IReserve,
} from './types';
import {
  IDefaultHouseFormValues,
  IHouseForm,
} from '../../components/Forms/HouseForm/types';
import {
  defaultHouseFormValues,
  defaultNoValues,
} from '../../components/Forms/HouseForm/servicesOptions';
import { UserContext } from '../UserContext';

export const HousesContext = createContext<IHousesContext>(
  {} as IHousesContext
);

export const HousesProvider = ({ children }: IHousesProviderProps) => {
  const { setLoading } = useContext(UserContext);

  const [housesList, setHousesList] = useState<IHouse[]>([]);
  const [housesRent, setHousesRent] = useState<IRent[]>([]);
  const [housesFilterList, setHousesFilterList] = useState<IHouse[]>([]);
  const [selectedHouse, setSelectedHouse] = useState<
    IHouse | InoDefaultValue | IDefaultHouseFormValues | null
  >(null);
  const [selectedRent, setSelectedRent] = useState<IRent | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date[] | null>(null);
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
    setLoading(true);
    const loadHouses = async (): Promise<void> => {
      try {
        const response = await api.get('/houses');
        setHousesList(response.data);
        setHousesFilterList(response.data);
      } catch (error) {
        window.localStorage.clear();
        setHousesList([]);
        toast.error('Não foi possivel acessar as casas');
      } finally {
        setLoading(false);
      }
    };
    loadHouses();
  }, []);

  const loadRent = async () => {
    const token = localStorage.getItem('@HomeYou:TOKEN');
    if (token) {
      try {
        const res = await api.get('/rents');
        setHousesRent(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setLoading(true);

    loadRent();
  }, []);

  // const loadHouseInfo = (productID: number): void => {
  //   const findHouse = housesList.find((houses) => houses.id === productID);
  //   setSelectedHouse(findHouse);
  // };

  const createHouse = async (dataHouse: IHouseForm): Promise<void> => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
  };

  const loadOneHouse = async (id: number): Promise<void> => {
    setSelectedHouse(defaultHouseFormValues);
    setLoading(true);
    try {
      const response = await api.get(`/houses/${id}`);
      setSelectedHouse(response.data);

      const values = {
        name: response.data?.name,
        photos: response.data?.photos.map((photo: string) => ({
          value: photo,
          label: photo,
        })),
        state: response.data?.state,
        city: response.data?.city,
        daylyPrice: response.data?.daylyPrice,
        singleBed: response.data?.accommodation.beds,
        doubleBed: response.data?.accommodation.doubleBeds,
        services: response.data?.services.map((service: string) => service),
        houseDesc: response.data?.houseDesc,
      };

      setLoadValues(values);
    } catch (error) {
      setSelectedHouse(null);
      console.error(error);
      toast.error('Falha ao carregar dados da casa');
      // navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const editHouse = async (dataHouse: IHouseForm): Promise<void> => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteHouse = async (): Promise<void> => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
  };

  const createReserve = async (newRent: IReserve): Promise<void> => {
    setLoading(true);
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    const userAuxString = localStorage.getItem('@HomeYou:User');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;

    console.log(newRent);
    if (userAux) {
      try {
        const response = await api.post('/rents', newRent, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success('Casa reservada com sucesso');
        loadRent();
      } catch (error) {
        console.error(error);
        toast.error('Falha ao reservar casa');

        // navigate('/');
      } finally {
        setLoading(false);
      }
    }
  };

  const editReserve = async (
    editedReserve: IReserve,
    id: number
  ): Promise<void> => {
    setLoading(true);
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    console.log(editedReserve);
    try {
      const response = await api.patch(`/rents/${id}`, editedReserve, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Reserva atualizada com sucesso');
      loadRent();
    } catch (error) {
      console.error(error);
      toast.error('Falha ao atualizar reserva');

      // navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const deleteReserve = async (id: number): Promise<void> => {
    setLoading(true);
    const token = window.localStorage.getItem('@HomeYou:TOKEN');
    try {
      const response = await api.delete(`/rents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Casa deletada com sucesso');
      loadRent();
    } catch (error) {
      console.error(error);
      toast.error('Falha ao deletar casa');

      // navigate('/');
    } finally {
      setLoading(false);
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
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </HousesContext.Provider>
  );
};
