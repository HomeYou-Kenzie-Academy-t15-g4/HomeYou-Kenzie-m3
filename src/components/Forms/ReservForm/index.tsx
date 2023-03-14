import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HousesContext } from '../../../providers/HousesContext';
import Select, { ActionMeta, SingleValue } from 'react-select';
import SelectCalendar from '../../StyledCalendar';
import { ModalsContext } from '../../../providers/ModalsContext';
import Modal from '../../Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { IReserve } from '../../../providers/HousesContext/types';
import * as yup from 'yup';
import { UserContext } from '../../../providers/UserContext';
import { reactSelectReservStyle, StyledReservForm } from './style';
import { StyledParagraph, StyledTitle } from '../../../styles/typograthy';
import { StyledButton } from '../../../styles/button';
import HorizontalSpacer from '../../SectionSpacers/HorizontalSpacer';

interface IReserveForm {
  rentedDays: Date[];
  guestNumber: string;
}

export const ReserveFormSchema = yup.object().shape({
  rentedDays: yup.array().required('Selecione a data da reserva'),
  guestNumber: yup.string().required('Informe quantos hospedes'),
});

const ReservForm = () => {
  const {
    createReserve,
    editReserve,
    deleteReserve,
    selectedRent,
    selectedHouse,
    selectedDate,
    setSelectedDate,
    setSelectedRent,
  } = useContext(HousesContext);
  const {
    isOpenCalendar,
    setIsOpenCalendar,
    deleteButton,
    closeModal,
    isOpen,
  } = useContext(ModalsContext);
  const { user } = useContext(UserContext);
  const [days, setDays] = useState(0);
  const [optionsGuest, setOptionsGuest] =
    useState<SingleValue<string | { value: string; label: string }>>();
  const userAuxString = localStorage.getItem('@HomeYou:User');
  const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;
  const options = [{ value: '1', label: '1  hospede' }];
  let optionsNumber = 1;

  const capacity =
    Number(selectedHouse?.accommodation?.beds) +
    2 * Number(selectedHouse?.accommodation?.doubleBeds);

  const {
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IReserveForm>({
    resolver: yupResolver(ReserveFormSchema as any),
  });

  useEffect(() => {
    setSelectedDate(null);
  }, [isOpen]);

  useEffect(() => {
    if (selectedDate) {
      setValue('rentedDays', selectedDate);
      selectedDate?.length ? setDays(selectedDate.length - 2) : setDays(0);
      clearErrors('rentedDays');
    }
  }, [selectedDate]);

  const submit: SubmitHandler<IReserveForm> = ({ rentedDays, guestNumber }) => {
    const data: IReserve = {
      rentedDays,
      guestNumber,
      userId: userAux.id,
      rentPrice: selectedHouse?.dailyPrice
        ? selectedHouse.dailyPrice * days * 0.02 +
          selectedHouse.dailyPrice * days
        : 0,
      guest: {
        photo: user?.photo ?? '',
        name: user?.name ?? '',
      },
      house: {
        id: selectedHouse?.id,
        name: selectedHouse?.name ?? '',
        photos: selectedHouse?.photos,
      },
    };
    if (deleteButton) {
      editReserve(data, selectedRent?.id ?? 0);
      closeModal();
    } else {
      createReserve(data);
      closeModal();
    }
  };

  while (optionsNumber < capacity) {
    optionsNumber++;
    options.push({
      value: optionsNumber.toString(),
      label: optionsNumber + ' hospedes',
    });
  }

  useEffect(() => {
    const tempOptionsGuest = options.find(
      (option) => option.value == selectedRent?.guestNumber
    );
    setOptionsGuest(tempOptionsGuest);
    let tempDates: Date[] = selectedRent?.rentedDays?.map(
      (dateString) => new Date(dateString)
    ) as Date[];
    setValue('rentedDays', tempDates);
    setValue('guestNumber', tempOptionsGuest?.value ?? '');
    
  }, [selectedHouse]);

  const openCalendar = () => {
    window.scroll(0, 0);
    setIsOpenCalendar(true);
  };

  const uptadeGuestNumber = (
    newValue: SingleValue<string | { value: string; label: string }>,
    actionMeta: ActionMeta<string | { value: string; label: string }>
  ) => {
    if (typeof newValue === 'string') {
      setValue('guestNumber', newValue);
    } else {
      setValue('guestNumber', newValue?.value ?? '');
    }
    clearErrors('guestNumber');

    setOptionsGuest(newValue);
  };

  return (
    <StyledReservForm onSubmit={handleSubmit(submit)}>
      {isOpenCalendar ? (
        deleteButton ? (
          <Modal title='Editar reserva'>
            <SelectCalendar />
          </Modal>
        ) : (
          <Modal title='Escolher Data'>
            <SelectCalendar />
          </Modal>
        )
      ) : null}
      <div className='formArea'>
        <div onClick={() => openCalendar()}>
          {selectedRent || selectedDate ? (
            <div className='selectedDates'>
              <div className='checkIn'>
                <StyledTitle
                  tag='h3'
                  $fontSize='three'
                  $fontColor='greyBold'
                  $textAlign='center'
                >
                  Check-in
                </StyledTitle>
                <StyledParagraph $fontColor='greyBold' $textAlign='center'>
                  {selectedDate !== undefined &&
                  selectedDate !== null &&
                  selectedDate.length !== 0
                    ? selectedDate[0].toLocaleString('default', {
                        day: '2-digit',
                      })
                    : new Date(
                        selectedRent?.rentedDays[0] ?? ''
                      ).toLocaleString('default', {
                        day: '2-digit',
                      })}
                  /
                  {selectedDate !== undefined &&
                  selectedDate !== null &&
                  selectedDate.length !== 0
                    ? selectedDate[0].toLocaleString('default', {
                        month: '2-digit',
                      })
                    : new Date(
                        selectedRent?.rentedDays[0] ?? ''
                      ).toLocaleString('default', {
                        month: '2-digit',
                      })}
                  /
                  {selectedDate !== undefined &&
                  selectedDate !== null &&
                  selectedDate.length !== 0
                    ? selectedDate[0].toLocaleString('default', {
                        year: 'numeric',
                      })
                    : new Date(
                        selectedRent?.rentedDays[0] ?? ''
                      ).toLocaleString('default', {
                        year: 'numeric',
                      })}
                </StyledParagraph>
              </div>
              <div>
                <StyledTitle
                  tag='h3'
                  $fontSize='three'
                  $fontColor='greyBold'
                  $textAlign='center'
                >
                  Check-out
                </StyledTitle>
                <StyledParagraph $fontColor='greyBold' $textAlign='center'>
                  {selectedDate !== undefined &&
                  selectedDate !== null &&
                  selectedDate.length !== 0
                    ? selectedDate[selectedDate.length - 1].toLocaleString(
                        'default',
                        {
                          day: '2-digit',
                        }
                      )
                    : new Date(
                        selectedRent?.rentedDays[
                          selectedRent?.rentedDays.length - 1
                        ] ?? ''
                      ).toLocaleString('default', {
                        day: '2-digit',
                      })}
                  /
                  {selectedDate !== undefined &&
                  selectedDate !== null &&
                  selectedDate.length !== 0
                    ? selectedDate[selectedDate.length - 1].toLocaleString(
                        'default',
                        {
                          month: '2-digit',
                        }
                      )
                    : new Date(
                        selectedRent?.rentedDays[
                          selectedRent?.rentedDays.length - 1
                        ] ?? ''
                      ).toLocaleString('default', {
                        month: '2-digit',
                      })}
                  /
                  {selectedDate !== undefined &&
                  selectedDate !== null &&
                  selectedDate.length !== 0
                    ? selectedDate[selectedDate.length - 1].toLocaleString(
                        'default',
                        {
                          year: 'numeric',
                        }
                      )
                    : new Date(
                        selectedRent?.rentedDays[
                          selectedRent?.rentedDays.length - 1
                        ] ?? ''
                      ).toLocaleString('default', {
                        year: 'numeric',
                      })}
                </StyledParagraph>
              </div>
            </div>
          ) : (
            <StyledTitle
              className='noSelectedDates'
              tag='h3'
              $fontColor='greyBold'
              $textAlign='center'
              $fontSize='three'
            >
              Escolher data
            </StyledTitle>
          )}
        </div>
        <Select
          styles={reactSelectReservStyle}
          placeholder='Quantos hóspedes?'
          options={options}
          onChange={uptadeGuestNumber}
          value={optionsGuest}
        />
      </div>
      <div className='reservFormErrors'>
        {errors.rentedDays && errors.guestNumber ? (
          <StyledParagraph $fontColor='red' $textAlign='left'>
            Todos campos são obrigatórios
          </StyledParagraph>
        ) : errors.rentedDays ? (
          <StyledParagraph $fontColor='red' $textAlign='left'>
            {errors.rentedDays.message}
          </StyledParagraph>
        ) : errors.guestNumber ? (
          <StyledParagraph $fontColor='red' $textAlign='left'>
            {errors.guestNumber?.message}
          </StyledParagraph>
        ) : null}
      </div>
      {deleteButton ? null : (
        <StyledButton
          className='reservButton'
          $buttonSize='short'
          $buttonStyle='primary'
        >
          Reservar
        </StyledButton>
      )}
      <HorizontalSpacer />
      <span className='daysPrice'>
        <p className='resumCalc'>
          {' '}
          R$ {selectedHouse?.dailyPrice} x {days} noites
        </p>
        <p className='resumCalc'>
          R$ {selectedHouse?.dailyPrice ? selectedHouse.dailyPrice * days : 0}{' '}
        </p>
      </span>
      <span className='daysPrice'>
        <p className='resumCalc'> Taxa de serviço</p>
        <p className='resumCalc'>
          R${' '}
          {selectedHouse?.dailyPrice
            ? (selectedHouse.dailyPrice * days * 0.02).toFixed(2)
            : 0}{' '}
        </p>
      </span>
      <HorizontalSpacer />
      <span className='totalPrice'>
        <p className=''> Total</p>
        <p className=''>
          R${' '}
          {selectedHouse?.dailyPrice
            ? (
                selectedHouse.dailyPrice * days * 0.02 +
                selectedHouse.dailyPrice * days
              ).toFixed(2)
            : 0}
        </p>
      </span>
      {deleteButton ? (
        <div className='editReservButtons'>
          <StyledButton
            type='submit'
            className='editButton'
            $buttonSize='short'
            $buttonStyle='primary'
          >
            Salvar alterações
          </StyledButton>
          <StyledButton
            type='button'
            onClick={() => {
              deleteReserve(selectedRent?.id ?? 0);
              closeModal();
              setSelectedRent(null);
            }}
            className='deleteButton'
            $buttonSize='short'
            $buttonStyle='default'
          >
            Cancelar reserva
          </StyledButton>
        </div>
      ) : null}
    </StyledReservForm>
  );
};

export default ReservForm;
