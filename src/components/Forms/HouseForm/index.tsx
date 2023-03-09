import { ReactNode, useContext, useEffect, useState } from 'react';
import Select, { ActionMeta, MultiValue, PropsValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from './Input';
import { StyledForm } from './style';
import { servicesOptions } from './servicesOptions';
import SelectState from '../../Selects/SelectState';
import SelectCity from '../../Selects/SelectCity';
import { HousesContext } from '../../../providers/HousesContext';

const schema = yup.object().shape({
  houseName: yup.string().required('Campo Obrigatório'),
  city: yup.string().required('Campo Obrigatório'),
  state: yup.string().required('Campo Obrigatório'),
  photos: yup
    .array()
    .min(3, 'Adicione no minimo 3 fotos')
    .of(yup.string())
    .required('Campo Obrigatório'),
  dailyPrice: yup
    .number()
    .typeError('Campo Obrigatório')
    .positive('Épreciso informar um valor positivo')
    .required(),
  singleBed: yup
    .number()
    .typeError('Campo Obrigatório')
    .integer('É preciso informar um numero inteiro')
    .required('Campo Obrigatório'),
  doubleBed: yup
    .number()
    .typeError('Campo Obrigatório')
    .integer('É preciso informar um numero inteiro')
    .required('Campo Obrigatório'),
  services: yup
    .array()
    .min(3, 'Selecione no minimo 3 opções')
    .of(yup.string())
    .required('Campo Obrigatório'),
});

export interface IHouseForm extends yup.InferType<typeof schema> {
  id?: number;
  houseName: string;
  photos: string[];
  city: string;
  state: string;
  dailyPrice: number;
  singleBed: number;
  doubleBed: number;
  services: string[];
}

export interface IDefaultHouseFormValues {
  houseName: undefined | string;
  photos:
    | PropsValue<{
        value: string;
        label: string;
      } | null>
    | undefined;
  state: null | number;
  city:
    | PropsValue<{
        value: string;
        label: string;
      } | null>
    | undefined;
  dailyPrice: undefined | number;
  singleBed: undefined | number;
  doubleBed: undefined | number;
  services: null | PropsValue<{
    value: string;
    label: string;
  } | null>;
}

interface IHouseFormProps {
  children: ReactNode;
  submitFunction: (dataHouse: IHouseForm) => Promise<void>;
  defaultHouseFormValues?: IDefaultHouseFormValues;
}

export const defaultNoValues = {
  houseName: undefined,
  photos: null,
  state: null,
  city: null,
  dailyPrice: undefined,
  singleBed: undefined,
  doubleBed: undefined,
  services: null,
};

const HouseForm = ({
  submitFunction,
  children,
  defaultHouseFormValues,
}: IHouseFormProps) => {
  const {loadValues} = useContext(HousesContext)

  const [selectedUf, setSelectedUf] = useState('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState('');
  // const [defaultValues, setDefaultValues] = useState<IDefaultHouseFormValues>(defaultNoValues);

  // useEffect(() => {
  //   if (defaultHouseFormValues) {
  //     setDefaultValues(defaultHouseFormValues);
  //     console.log(defaultValues.houseName);
  //   }
  // }, [defaultHouseFormValues]);

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
  }, [selectedState]);

  useEffect(() => {
    setValue('city', selectedCity);
    clearErrors('city');
  }, [selectedCity]);

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
    <StyledForm onSubmit={handleSubmit(submitFunction)}>
      <div className='label temporario'>Nome da Casa</div>
      <Input
        value={loadValues.houseName}
        placeholder='Digite o nome da casa'
        type='text'
        error={errors.houseName}
        register={register}
        name='houseName'
        label='Nome'
      />
      <div className='label temporario'>Fotos</div>
      <CreatableSelect
        isClearable
        isMulti
        className='photo-link-select'
        defaultValue={loadValues.photos}
        classNamePrefix='select-photos'
        placeholder='Adicione o link das fotos'
        onChange={handleChangePhotos}
        formatCreateLabel={(inputValue) => `Adicionar: "${inputValue}"`}
      />
      <p>{errors.photos?.message}</p>
      <div className='label temporario'>Local</div>
      <div style={{ display: 'flex' }}>
        <SelectState
          defaultValue={loadValues.state}
          error={errors.state}
          register={register}
          onChange={setSelectedUf}
          setSelectedState={setSelectedState}
        />
        <p>{errors.state?.message}</p>
        <SelectCity
          defaultValue={loadValues.city}
          uf={selectedUf}
          error={errors.city}
          setSelectedCity={setSelectedCity}
          register={register}
        />
        <p>{errors.city?.message}</p>
      </div>
      <div className='label temporario'>Valor por noite</div>
      <Input
        value={loadValues.dailyPrice}
        placeholder='Valor da Diaria'
        type='number'
        error={errors.dailyPrice}
        register={register}
        name='dailyPrice'
        label='Diaria'
      />
      <div className='label temporario'>Camas</div>
      <div style={{ display: 'flex' }}>
        <Input
          placeholder='Camas de solteiro'
          type='number'
          error={errors.singleBed}
          value={loadValues.singleBed}
          register={register}
          name='singleBed'
          label='Quantas camas'
        />
        <Input
          value={loadValues.doubleBed}
          placeholder='Camas de casal'
          type='number'
          error={errors.doubleBed}
          register={register}
          name='doubleBed'
          label='Quantas camas'
        />
      </div>
      <div className='label temporario'>Serviços oferecidos</div>
      <Select
        isMulti
        options={servicesOptions}
        className='basic-multi-select'
        defaultValue={loadValues.services}
        classNamePrefix='select'
        placeholder='O que o local oferece?'
        onChange={handleChangeServices}
      />
      <p>{errors.services?.message}</p>
      <span className='formButtons'>{children}</span>
    </StyledForm>
  );
};

export default HouseForm;
