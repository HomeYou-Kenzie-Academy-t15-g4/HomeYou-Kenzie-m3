import { Autocomplete, TextField } from '@mui/material';
import { useContext } from 'react';
import { IState, IuseStatesProps, useStates } from '../../../hooks/useStates';
import { HousesContext } from '../../../providers/HousesContext';

export interface IStatesInfo {
  value: number;
  label: string;
}

const SelectState = ({ onChange, setSelectedState }: IuseStatesProps) => {
  const { states } = useStates();
  const { loadValues, setLoadValues } = useContext(HousesContext);

  const handleStateUpdate = (
    event: React.SyntheticEvent<Element, Event>,
    value: IState | null
  ) => {
    setLoadValues({
      ...loadValues,
      state: value ? value.sigla : '',
    });
    setSelectedState(value ? String(value.sigla) : '');
    onChange(value ? value.sigla : '');
  };

  return (
    <Autocomplete
      id='tags-outlined'
      options={states}
      getOptionLabel={(option) => option.sigla}
      filterSelectedOptions
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        value: IState | null
      ) => handleStateUpdate(event, value)}
      renderInput={(params) => <TextField {...params} label='Estado' />}
    />
  );
};

export default SelectState;
