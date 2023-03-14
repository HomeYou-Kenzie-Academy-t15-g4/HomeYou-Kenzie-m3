import { UseFormRegister, FieldError } from 'react-hook-form';
import useCities, { ICity } from '../../../hooks/useCities';
import { IHouseForm } from '../../Forms/HouseForm/types';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { HousesContext } from '../../../providers/HousesContext';
import React, { useContext } from 'react';

export interface ISelectCityProps {
  uf: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  register?: UseFormRegister<IHouseForm>;
  error?: FieldError | undefined;
}

const SelectCity = ({ uf, setSelectedCity }: ISelectCityProps) => {
  const { loadValues, setLoadValues } = useContext(HousesContext);

  const { cities, loading } = useCities({
    uf,
  });

  const handleCityUpdate = (
    event: React.SyntheticEvent<Element, Event>,
    value: ICity | null
  ) => {
    setLoadValues({
      ...loadValues,
      city: value ? value.nome : '',
    });
    setSelectedCity(value ? value.nome : '');
  };

  return (
    <Autocomplete
      id='tags-outlined'
      options={cities}
      getOptionLabel={(option) => option.nome}
      filterSelectedOptions
      loading={loading}
      disabled={uf === ''}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        value: ICity | null
      ) => handleCityUpdate(event, value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Cidade'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default SelectCity;
