import { useContext, useEffect, useState } from 'react';
import { ActionMeta, MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Checkbox, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select} from '@mui/material';

import { getStyles, MenuProps, reactSelectStyle, StyledForm, StyleMuiSelector, StyleMuiSelectorMidWidth } from './style';
import { defaultNoValues, servicesOptions } from './servicesOptions';
import SelectState from '../../Selects/SelectState';
import SelectCity from '../../Selects/SelectCity';
import { HousesContext } from '../../../providers/HousesContext';
import { IHouseForm, IHouseFormProps } from './types';
import { ModalsContext } from '../../../providers/ModalsContext';
import HouseInput from './HouseInput';
import { StyledParagraph } from '../../../styles/typograthy';
import IconsMatch from '../../IconsMatch';
import { houseSchema } from './validations';

const HouseForm = ({ submitFunction, children }: IHouseFormProps) => {
  const theme = useTheme();

  const { isCreateHouseModal, closeModal } = useContext(ModalsContext);
  const { loadValues, setLoadValues } = useContext(HousesContext);

  const [selectedUf, setSelectedUf] = useState('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState('');
  const [stopUpdate, setStopUpdate] = useState(false);

  useEffect(() => {
    if (!isCreateHouseModal) {
      setValue('state', loadValues?.state ?? '');
      setValue('city', loadValues?.city ?? '');
    }
  }, [loadValues]);

  const { register, handleSubmit, setValue, clearErrors, formState: { errors }, } = useForm<IHouseForm>({
    resolver: yupResolver(houseSchema as any),
  });

  useEffect(() => {
    if (loadValues !== defaultNoValues && loadValues && !stopUpdate) {
      setValue('name', loadValues?.name ?? '');
      setValue('dailyPrice', Number(loadValues?.dailyPrice) ?? '');

      if (loadValues?.singleBed !== '') {
        setValue('singleBed', Number(loadValues?.singleBed) ?? '');
      }
      if (loadValues?.doubleBed !== '') {
        setValue('doubleBed', Number(loadValues?.doubleBed) ?? '');
      }
      setValue('houseDesc', loadValues?.houseDesc ?? '');

      let tempPhotos: string[] = [];
      if (Array.isArray(loadValues?.photos)) {
        loadValues.photos.map((option) => tempPhotos.push(option?.value || ''));
      } else {
        tempPhotos = [];
      }
      setValue('photos', tempPhotos);

      setValue('state', loadValues?.state ?? '');

      setValue('city', loadValues?.city ?? '');

      let tempServices: string[] = [];
      if (Array.isArray(loadValues?.services)) {
        loadValues.services.map((option) => tempServices.push(option || ''));
      } else {
        tempServices = [];
      }
      setValue('services', tempServices);
    }
  }, [loadValues]);

  useEffect(() => {
    setValue('state', selectedState);
    clearErrors('state');
  }, [selectedState]);

  useEffect(() => {
    setValue('city', selectedCity);
    clearErrors('city');
  }, [selectedCity]);

  const handleChangePhotos = (
    newValue: MultiValue<{ value: string; label: string } | null>
  ) => {
    setStopUpdate(true);
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

  const handleChangeServices = (event: SelectChangeEvent<string[]>) => {
    setStopUpdate(true);
    setLoadValues({
      ...loadValues,
      services: event.target.value as string[],
    });
    setValue('services', event.target.value as string[]);
    clearErrors('services');
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoadValues({ ...loadValues, name: e.target.value, });    
    clearErrors('name');
  };
  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoadValues({ ...loadValues, dailyPrice: Number(e.target.value), });
    clearErrors('dailyPrice');
  };
  const changeBeds = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoadValues({ ...loadValues, singleBed: Number(e.target.value),  });
    clearErrors('singleBed');
  };
  const changeDoubleBeds = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoadValues({ ...loadValues, doubleBed: Number(e.target.value), });
    clearErrors('doubleBed');
  };
  const changeHouseDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLoadValues({ ...loadValues, houseDesc: e.target.value, });
    clearErrors('houseDesc');
  };

  const onSubmit = (data: IHouseForm) => {
    submitFunction(data);
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <HouseInput
        value={loadValues.name}
        onChange={changeName}
        label='Nome da Casa'
        type='text'
        register={register('name')}
        error={errors.name}
      />

      {isCreateHouseModal ? (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <FormControl sx={StyleMuiSelectorMidWidth}>
              <SelectState
                error={errors.state}
                onChange={setSelectedUf}
                setSelectedState={setSelectedState}
              />
              {errors.state ? (
                <StyledParagraph $fontColor='red'>
                  {errors.state?.message}
                </StyledParagraph>
              ) : null}
            </FormControl>
            <FormControl
              title='Primeiro selecione o estado'
              sx={StyleMuiSelectorMidWidth}
            >
              <SelectCity
                error={errors.city}
                uf={selectedUf}
                setSelectedCity={setSelectedCity}
              />
              {errors.city ? (
                <StyledParagraph $fontColor='red'>
                  {errors.city?.message}
                </StyledParagraph>
              ) : null}
            </FormControl>
          </div>
        </div>
      ) : null}

      <HouseInput
        value={loadValues.dailyPrice?.toString()}
        onChange={changePrice}
        label='Valor por noite'
        type='number'
        register={register('dailyPrice')}
        error={errors.dailyPrice}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <HouseInput
          controlSx={{ width: '45%' }}
          value={loadValues.singleBed?.toString()}
          onChange={changeBeds}
          label='Camas de solteiro'
          type='number'
          register={register('singleBed')}
          error={errors.singleBed}
        />
        <HouseInput
          controlSx={{ width: '45%' }}
          value={loadValues.doubleBed?.toString()}
          onChange={changeDoubleBeds}
          label='Camas de casal'
          type='number'
          register={register('doubleBed')}
          error={errors.doubleBed}
        />
      </div>
      <FormControl sx={StyleMuiSelector}>
        <InputLabel id='services-select-label'>
          O que o local oferece?
        </InputLabel>
        <Select
          sx={{
            maxWidth: '74vw',
          }}
          multiple
          error={errors.services ? true : false}
          labelId='services-select-label'
          id='services-select'
          label='O que o local oferece?'
          value={loadValues.services}
          onChange={(event: SelectChangeEvent<string[]>) =>
            handleChangeServices(event)
          }
          input={
            <OutlinedInput
              id='select-multiple-chip'
              label='O que o local oferece?'
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {servicesOptions.map((service) => {
            return (
              <MenuItem
                sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}
                style={getStyles(service.value, loadValues.services, theme)}
                key={service.value}
                value={service.value}
              >
                <Checkbox
                  checked={loadValues.services.indexOf(service.value) > -1}
                />
                <IconsMatch iconName={service.value} />
                {service.value}
              </MenuItem>
            );
          })}
        </Select>
        {errors.services ? (
          <StyledParagraph $fontColor='red'>
            {errors.services?.message}
          </StyledParagraph>
        ) : null}
      </FormControl>
      <HouseInput
        value={loadValues.houseDesc}
        onChange={changeHouseDesc}
        label='Descreva o local'
        type='text'
        register={register('houseDesc')}
        error={errors.houseDesc}
        multiline={true}
        helperText={true}
      />
      <StyledParagraph className='labelPhotos' $fontColor='grey'>
        Fotos
      </StyledParagraph>
      <CreatableSelect
        isClearable
        isMulti
        styles={reactSelectStyle}
        className='photo-link-select'
        value={loadValues.photos}
        defaultValue={loadValues.photos}
        classNamePrefix='select-photos'
        placeholder='Adicione os links das fotos'
        onChange={handleChangePhotos}
        formatCreateLabel={(inputValue) => `Adicionar: "${inputValue}"`}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#04C35C',
            primary: '#0C6B38',
          },
        })}
      />
      {errors.photos ? (
        <StyledParagraph className='errorPhotos' $fontColor='red'>
          {errors.photos?.message}
        </StyledParagraph>
      ) : null}
      <span className='formButtons'>{children}</span>
    </StyledForm>
  );
};

export default HouseForm;
