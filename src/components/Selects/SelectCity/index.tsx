import { UseFormRegister, FieldError } from 'react-hook-form';
import useCities, { ICity } from '../../../hooks/useCities';
import { IHouseForm } from '../../Forms/HouseForm/types';
import { Autocomplete, CircularProgress, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
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

  const handleCityUpdate = (event: React.SyntheticEvent<Element, Event>, value: ICity | null) => {
    console.log(value);
    
    setLoadValues({
      ...loadValues,
      city: value ? value.nome : '',
    });
    setSelectedCity(value ? value.nome : '');
  };

  return (
    <Autocomplete
        id="tags-outlined"
        options={cities}
        getOptionLabel={(option) => option.nome}
        filterSelectedOptions        
        loading={loading}
        disabled={uf === ''}

        onChange={(event: React.SyntheticEvent<Element, Event>, value: ICity | null) => handleCityUpdate(event, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Cidade"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    // <Select
    //   
    //   labelId='city-select-label'
    //   value={loadValues.city}
    //   id='city-select'
    //   name='Cidade'
    //   label='Cidade'
    //   onChange={(event: SelectChangeEvent<string>) => handleCityUpdate(event)}
    // >
    //   {cities.map((city) => {
    //     return (
    //       <MenuItem key={city.nome} value={city.nome}>
    //         {city.nome}
    //       </MenuItem>
    //     );
    //   })}
    // </Select>
  );
};

export default SelectCity;
