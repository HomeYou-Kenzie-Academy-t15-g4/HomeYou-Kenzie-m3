import { useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { IHouseForm } from "../components/Forms/HouseForm/types";

export interface ICity {
  nome: string;
  codigo_ibge: string;
}

export interface IuseCitiesProps {
  uf: string;
  register?: UseFormRegister<IHouseForm>;
  error?: FieldError | undefined;
}

const useCities = ({ uf }: IuseCitiesProps) => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uf) return;

    setLoading(true);
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.json())
      .then((data) => setCities(data))
      .then(() => setLoading(false));
  }, [uf]);

  return {
    cities,
    loading
  };
};

export default useCities