import { useState } from "react";
import Select, { ActionMeta, GroupBase, OptionsOrGroups, SingleValue } from "react-select";
import { IuseStatesProps, useStates } from "../../../hooks/useStates";

export interface IStatesInfo {
  value: number;
  label: string;
}

const SelectState = ({ onChange, setSelectedState }: IuseStatesProps) => {
  const { states } = useStates();
  const [selectedStateAux, setSelectedStateAux] = useState<number | null>(null);


  const stateOptions = states.map((state) => ({
    value: state.id.toString(),
    label: state.nome
  }));

  const selectedOptionState = stateOptions.find(
    (e) => Number(e.value) === selectedStateAux
  );

  const handleStateUpdate = (newValue: SingleValue<{ value: string; label: string; } | null>, actionMeta: ActionMeta<{ value: string; label: string; } | null>) => {
    const getStateId: number | null = Number(newValue?.value)
    
    setSelectedStateAux(getStateId);
    const selectedUf = states.find((e) => e.id === getStateId)?.sigla;
    setSelectedState(selectedUf ?? '')
    onChange(selectedUf ?? '');
  };

  return (
    <Select
      placeholder="Selecione um estado"
      onChange={handleStateUpdate}
      options={stateOptions}
      value={selectedOptionState}
    />
  );
};


export default SelectState;