import { useEffect, useState } from "react";
import { FieldError, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { IHouseForm } from "../components/Forms/HouseForm";

export interface Region {
  id: number;
  sigla: string;
  nome: string;
}

export interface IState {
  id: number;
  sigla: string;
  nome: string;
  regiao: Region;
}

export interface IuseStatesProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  register: (name: any, options?: RegisterOptions<IHouseForm, any> | undefined) => UseFormRegisterReturn<any>;
  error?: FieldError | undefined;
  setSelectedState: React.Dispatch<React.SetStateAction<string>>;
}

export const useStates = () => {
  const [states, setStates] = useState<IState[]>([]);

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/ibge/uf/v1")
      .then((response) => response.json())
      .then((data) => setStates(data));
  }, []);

  return {
    states
  };
};