import { UseFormRegister, FieldError } from "react-hook-form";
import Select, { ActionMeta, SingleValue } from "react-select";
import useCities from "../../../hooks/useCities";
import { IHouseForm } from "../../Forms/HouseForm";


export interface ISelectCityProps {
  uf: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  register?: UseFormRegister<IHouseForm>;
  error?: FieldError | undefined;
}

const SelectCity = ({ uf, setSelectedCity }:ISelectCityProps) => {
  const { cities, loading: loadingCities } = useCities({
    uf
  });


  const cityOptions = cities.map((city) => ({
    value: city.codigo_ibge,
    label: city.nome
  }));

  const handleStateUpdate = (newValue: SingleValue<{ value: string; label: string; } | null>, actionMeta: ActionMeta<{ value: string; label: string; } | null>) => {

    setSelectedCity(newValue?.label ?? '')
  };

  return (
    <Select
      isLoading={loadingCities}
      loadingMessage={() => "Carregando as cidades..."}
      isDisabled={loadingCities || cityOptions.length === 0}
      options={cityOptions}
      placeholder="Selecione uma cidade"
      onChange={handleStateUpdate}
      // need to ADD text-transform:capitalize; ON CSS
    />
  );
};

export default SelectCity;