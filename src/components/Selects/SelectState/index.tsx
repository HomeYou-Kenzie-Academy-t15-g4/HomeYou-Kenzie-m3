import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';
import { IuseStatesProps, useStates } from '../../../hooks/useStates';
import { HousesContext } from '../../../providers/HousesContext';

export interface IStatesInfo {
  value: number;
  label: string;
}

const SelectState = ({ onChange, setSelectedState }: IuseStatesProps) => {
  const { states } = useStates();
  const { loadValues, setLoadValues } = useContext(HousesContext);

  const handleStateUpdate = (event: SelectChangeEvent<string>) => {
    setLoadValues({
      ...loadValues,
      state: event.target.value,
    });
    setSelectedState(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Select
      labelId='state-select-label'
      id='state-select'
      defaultValue=''
      value={loadValues.state}
      name='Estado'
      label='Estado'
      onChange={(event: SelectChangeEvent<string>) => handleStateUpdate(event)}
    >
      {states.map((state) => {
        return (
          <MenuItem key={state.id} value={state.sigla}>
            {state.sigla}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SelectState;
