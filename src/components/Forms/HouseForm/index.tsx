import { useContext, useEffect, useState } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
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
import { IHouseForm, IHouseFormProps } from './types';
import { statesDatabase } from '../../Modal/ManageHouseModal/statesDatabase';
import { ModalsContext } from '../../../providers/ModalsContext';

export const houseSchema = yup.object().shape({
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

const HouseForm = ({ submitFunction, children }: IHouseFormProps) => {
  const { isCreateHouseModal, closeModal } = useContext(ModalsContext);
  const { loadValues, setLoadValues } = useContext(HousesContext);

  const [selectedUf, setSelectedUf] = useState('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState('');
  const [stopUpdate, setStopUpdate] = useState(false);

  useEffect(() => {
    if (!isCreateHouseModal) {
      let selectedOptionState = statesDatabase.find(
        (e) => Number(e.id) === loadValues?.state
      );
      setValue('state', selectedOptionState?.sigla !== undefined ? selectedOptionState.sigla.toString() : '');
      setValue('city', loadValues?.city?.value);
    }
  }, [loadValues]);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm<IHouseForm>({
    resolver: yupResolver(houseSchema),
  });

  const handleChangePhotos = (
    newValue: MultiValue<{ value: string; label: string } | null>,
    actionMeta: ActionMeta<{ value: string; label: string } | null>
  ) => {
    setStopUpdate(true)
    let values: string[] = [];
    (newValue ?? []).map((option) => values.push(option?.value || ''));
    let tempPhotos: { value: string; label: string }[] = [];
    values.map((value) => tempPhotos.push({ value: value, label: value }));
    setLoadValues({
      ...loadValues,
      photos: tempPhotos,
    });

    setValue('photos', values);
    clearErrors('photos');
  };

  const onSubmit = (data: IHouseForm) => {
    submitFunction(data)
    closeModal()
  }

  useEffect(() => {
    if (loadValues !== defaultNoValues && !stopUpdate) {
      if ('houseName' in dirtyFields) {
        setValue('houseName', loadValues?.houseName ?? '');
      }
      setValue('dailyPrice', loadValues?.dailyPrice ?? 0);
      setValue('singleBed', loadValues?.singleBed ?? 0);
      setValue('doubleBed', loadValues?.doubleBed ?? 0);

      let tempPhotos: string[] = [];
      if (Array.isArray(loadValues?.photos)) {
        loadValues.photos.map((option) => tempPhotos.push(option?.value || ''));
      } else {
        tempPhotos = [];
      }
      setValue('photos', tempPhotos);

      let selectedOptionState = statesDatabase.find(
        (e) => Number(e.id) === loadValues?.state
      );

      setValue('state', selectedOptionState?.sigla !== undefined ? selectedOptionState.sigla.toString() : '');

      setValue('city', loadValues?.city?.value);

      let tempServices: string[] = [];
      if (Array.isArray(loadValues?.services)) {
        loadValues.services.map((option) =>
          tempServices.push(option?.value || '')
        );
      } else {
        tempServices = [];
      }
      setValue('services', tempServices);
    }
  }, [loadValues, dirtyFields]);

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
    setStopUpdate(true)
    let values: string[] = [];
    (newValue ?? []).map((option) => values.push(option?.value || ''));
    let tempServices: { value: string; label: string }[] = [];
    values.map((value) => tempServices.push({ value: value, label: value }));
    setLoadValues({
      ...loadValues,
      services: tempServices,
    });
    setValue('services', values);
    clearErrors('services');
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        value={loadValues.photos}
        defaultValue={loadValues.photos}
        classNamePrefix='select-photos'
        placeholder='Adicione o link das fotos'
        onChange={handleChangePhotos}
        formatCreateLabel={(inputValue) => `Adicionar: "${inputValue}"`}
      />
      <p>{errors.photos?.message}</p>
      
      {isCreateHouseModal ? (
        <div>
          <div className='label temporario'>Local</div>
          <div style={{ display: 'flex' }}>
            <SelectState
              error={errors.state}
              register={register}
              onChange={setSelectedUf}
              setSelectedState={setSelectedState}
            />
            <p>{errors.state?.message}</p>
            <SelectCity
              uf={selectedUf}
              error={errors.city}
              setSelectedCity={setSelectedCity}
              register={register}
            />
            <p>{errors.city?.message}</p>
          </div>
        </div>
      ) : null}

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
        value={loadValues.services}
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
