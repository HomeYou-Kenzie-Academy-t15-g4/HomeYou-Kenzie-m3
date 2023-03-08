import { useContext, useEffect, useState } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { object, string, number, array } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from './Input';
import { UserContext } from '../../../providers/UserContext/index';
import { StyledForm } from './style';
import { IservicesOptions, servicesOptions } from './servicesOptions';
import SelectState from '../../Selects/SelectState';
import SelectCity from '../../Selects/SelectCity';
import { HousesContext } from '../../../providers/HousesContext';

const schema = yup.object().shape({
  houseName: yup.string().required('Campo Obrigatório'),
  city: yup.string().required('Campo Obrigatório'),
  state: yup.string().required('Campo Obrigatório'),
  photos: yup.array().min(3, 'Adicione no minimo 3 fotos').of(yup.string()).required('Campo Obrigatório'),
  dailyPrice: yup.number().typeError('Campo Obrigatório').positive('Épreciso informar um valor positivo').required(),
  singleBed: yup.number().typeError('Campo Obrigatório').integer('É preciso informar um numero inteiro').required('Campo Obrigatório'),
  doubleBed: yup.number().typeError('Campo Obrigatório').integer('É preciso informar um numero inteiro').required('Campo Obrigatório'),
  services: yup.array().min(3, 'Selecione no minimo 3 opções').of(yup.string()).required('Campo Obrigatório'),
});

export interface IHouseForm extends yup.InferType<typeof schema>{
  houseName: string;
  photos: string[];
  city: string;
  state: string;
  dailyPrice: number;
  singleBed: number;
  doubleBed: number;
  services: string[];
}

const HouseForm = () => {
const { createHouse } = useContext(HousesContext)

  const [selectedUf, setSelectedUf] = useState('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IHouseForm>({
    resolver: yupResolver(schema),
  });

  const handleChangePhotos = (
    newValue: MultiValue<{ value: string; label: string } | null>,
    actionMeta: ActionMeta<{ value: string; label: string } | null>
  ) => {
    let values: string[] = [];
    (newValue ?? []).map((option) => values.push(option?.value || ''));
    setValue('photos', values);
    clearErrors('photos');
  };

  useEffect(() => {
    setValue('state', selectedState);
    clearErrors('state');  
  }, [selectedState])

  useEffect(() => {
    setValue('city', selectedCity);
    clearErrors('city');  
  }, [selectedCity])
  
  const handleChangeServices = (
    newValue: MultiValue<{ value: string; label: string } | null>,
    actionMeta: ActionMeta<{ value: string; label: string } | null>
  ) => {
    let values: string[] = [];
    (newValue ?? []).map((option) => values.push(option?.value || ''));
    setValue('services', values);
    clearErrors('services');
  };

  return (
    <StyledForm onSubmit={handleSubmit(createHouse)}>
      <Input
        placeholder='Digite o nome da casa'
        type='text'
        error={errors.houseName}
        register={register}
        name='houseName'
        label='Nome'
      />
      <CreatableSelect
        isClearable
        isMulti
        // options={servicesOptions}
        className='photo-link-select'
        defaultValue={null}
        classNamePrefix='select-photos'
        placeholder='Adicione o link das fotos'
        onChange={handleChangePhotos}
        formatCreateLabel={(inputValue) => `Adicionar: "${inputValue}"`}
      />
      <p>{errors.photos?.message}</p>
      <SelectState
        error={errors.state}
        register={register}
        onChange={setSelectedUf}
        setSelectedState={setSelectedState}
      />
      <p>{errors.state?.message}</p>
      <SelectCity uf={selectedUf} error={errors.city} setSelectedCity={setSelectedCity} register={register} />
      <p>{errors.city?.message}</p>
      {/* <Input
        placeholder='Onde fica'
        type='text'
        error={errors.city}
        register={register}
        name='city'
        label='Cidade'
      />
      <Input
        placeholder='Onde fica'
        type='text'
        error={errors.city}
        register={register}
        name='state'
        label='Estado'
      /> */}
      <Input
        placeholder='Valor da Diaria'
        type='number'
        error={errors.dailyPrice}
        register={register}
        name='dailyPrice'
        label='Diaria'
      />
      <Input
        placeholder='Camas de solteiro'
        type='number'
        error={errors.singleBed}
        register={register}
        name='singleBed'
        label='Quantas camas'
      />
      <Input
        placeholder='Camas de casal'
        type='number'
        error={errors.doubleBed}
        register={register}
        name='doubleBed'
        label='Quantas camas'
      />
      <Select
        isMulti
        options={servicesOptions}
        className='basic-multi-select'
        defaultValue={null}
        classNamePrefix='select'
        placeholder='O que o local oferece?'
        onChange={handleChangeServices}
      />
      <p>{errors.services?.message}</p>
      <button type='submit'>Criar conta</button>
    </StyledForm>
  );
};

export default HouseForm;
