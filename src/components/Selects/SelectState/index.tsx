import { useContext, useState } from 'react';
import Select, { ActionMeta, PropsValue, SingleValue } from 'react-select';
import { IuseStatesProps, useStates } from '../../../hooks/useStates';
import { HousesContext } from '../../../providers/HousesContext';

export interface IStatesInfo {
  value: number;
  label: string;
}

const SelectState = ({
  onChange,
  setSelectedState
}: IuseStatesProps) => {
  const { states } = useStates();
  const { loadValues } = useContext(HousesContext);
  const [selectedStateAux, setSelectedStateAux] = useState<number | null>(
    loadValues.state
  );

  const stateOptions = states.map((state) => ({
    value: state.id.toString(),
    label: state.nome,
  }));

  let selectedOptionState = stateOptions.find(
    (e) => Number(e.value) === selectedStateAux
  );

  const handleStateUpdate = (
    newValue: SingleValue<{ value: string; label: string } | null>,
    actionMeta: ActionMeta<{ value: string; label: string } | null>
  ) => {
    const getStateId: number | null = Number(newValue?.value);

    setSelectedStateAux(getStateId);
    const selectedUf = states.find((e) => e.id === getStateId);

    setSelectedState(selectedUf?.sigla ?? '');
    onChange(selectedUf?.sigla ?? '');
  };

  return (
    <Select
      onChange={handleStateUpdate}
      options={stateOptions}
      placeholder={'Selecione um estado'}
    />
  );
};

export default SelectState;
