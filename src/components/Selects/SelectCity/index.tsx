import { UseFormRegister, FieldError } from 'react-hook-form';
import useCities from '../../../hooks/useCities';
import { IHouseForm } from '../../Forms/HouseForm/types';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { HousesContext } from '../../../providers/HousesContext';
import { useContext } from 'react';

export interface ISelectCityProps {
  uf: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  register?: UseFormRegister<IHouseForm>;
  error?: FieldError | undefined;
}

const SelectCity = ({ uf, setSelectedCity }: ISelectCityProps) => {
  const { loadValues, setLoadValues } = useContext(HousesContext);

  const { cities, loading: loadingCities } = useCities({
    uf,
  });

  const handleCityUpdate = (event: SelectChangeEvent<string>) => {
    setLoadValues({
      ...loadValues,
      city: event.target.value,
    });
    setSelectedCity(event.target.value);
  };

  return (
    <Select
      disabled={loadingCities || cities.length === 0}
      labelId='city-select-label'
      value={loadValues.city}
      id='city-select'
      name='Cidade'
      label='Cidade'
      onChange={(event: SelectChangeEvent<string>) => handleCityUpdate(event)}
    >
      {cities.map((city) => {
        return (
          <MenuItem key={city.nome} value={city.nome}>
            {city.nome}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SelectCity;
