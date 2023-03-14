import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HousesContext } from '../../../providers/HousesContext';
import { StyledDivReturnToLogin, StyledForm } from '../HouseForm/style';
import Select from 'react-select';
import SelectCalendar from '../../StyledCalendar';
import { ModalsContext } from '../../../providers/ModalsContext';
import Modal from '../../Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { IReserve } from '../../../providers/HousesContext/types';
import * as yup from 'yup';
import { UserContext } from '../../../providers/UserContext';

interface IReserveForm {
  rentedDays: Date[];
}

export const ReserveFormSchema = yup.object().shape({
  rentedDays: yup.array().required('campo obrigatório'),
});

const ReservForm = () => {
  const {
    createReserve,
    editReserve,
    deleteReserve,
    selectedRent,
    selectedHouse,
    selectedDate,
  } = useContext(HousesContext);
  const { isOpenCalendar, setIsOpenCalendar, deleteButton, closeModal } =
    useContext(ModalsContext);
  const { user } = useContext(UserContext);
  const [days, setDays] = useState(0);
  const userAuxString = localStorage.getItem('@HomeYou:User');
  const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;
  let optionsNumber = 1;

  const capacity =
    Number(selectedHouse?.accommodation?.beds) +
    2 * Number(selectedHouse?.accommodation?.doubleBeds);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm<IReserveForm>({
    resolver: yupResolver(ReserveFormSchema as any),
  });

  useEffect(() => {
    if (selectedDate) {
      setValue('rentedDays', selectedDate);
      selectedDate?.length ? setDays(selectedDate.length - 1) : setDays(0);
      clearErrors('rentedDays');
    }
  }, [selectedDate]);

  const submit: SubmitHandler<IReserveForm> = ({ rentedDays }) => {
    const data: IReserve = {
      rentedDays,
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
        photos: selectedHouse?.photos ?? [],
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

  const options = [{ value: '1', label: '1 hospede' }];

  while (optionsNumber < capacity) {
    optionsNumber++;
    options.push({
      value: optionsNumber.toString(),
      label: optionsNumber + ' hospedes',
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledDivReturnToLogin></StyledDivReturnToLogin>
      {isOpenCalendar ? (
        deleteButton ? (
          <Modal title='Editar reserva'>
            <SelectCalendar />
          </Modal>
        ) : (
          <Modal title={selectedHouse?.dailyPrice?.toString() ?? ''}>
            <SelectCalendar />
          </Modal>
        )
      ) : null}
      <div onClick={() => setIsOpenCalendar(true)}>
        {selectedRent?.rentedDays.length !== 0 && selectedDate ? (
          <div>
            <div>
              <h3>Check-in</h3>
              <p>
                {selectedDate[0]
                  ? selectedDate[0].toLocaleString('default', {
                      day: '2-digit',
                    })
                  : selectedRent?.rentedDays[0]}
                /
                {selectedDate[0]
                  ? selectedDate[0].toLocaleString('default', {
                      month: '2-digit',
                    })
                  : selectedRent?.rentedDays[0]}
                /
                {selectedDate[0]
                  ? selectedDate[0].toLocaleString('default', {
                      year: 'numeric',
                    })
                  : selectedRent?.rentedDays[0]}
              </p>
            </div>
            <div>
              <h3>Check-out</h3>
              <p>
                {selectedDate[0]
                  ? selectedDate[selectedDate.length - 1].toLocaleString(
                      'default',
                      {
                        day: '2-digit',
                      }
                    )
                  : selectedRent?.rentedDays[
                      selectedRent?.rentedDays.length - 1
                    ]}
                /
                {selectedDate[0]
                  ? selectedDate[selectedDate.length - 1].toLocaleString(
                      'default',
                      {
                        month: '2-digit',
                      }
                    )
                  : selectedRent?.rentedDays[
                      selectedRent?.rentedDays.length - 1
                    ]}
                /
                {selectedDate[0]
                  ? selectedDate[selectedDate.length - 1].toLocaleString(
                      'default',
                      {
                        year: 'numeric',
                      }
                    )
                  : selectedRent?.rentedDays[
                      selectedRent?.rentedDays.length - 1
                    ]}
              </p>
            </div>
          </div>
        ) : (
          <h1>Escolher data</h1>
        )}

        {errors.rentedDays?.message}
      </div>
      <Select placeholder='Selecione' options={options} />
      {deleteButton ? (
        <div>
          <button type='submit'>Editar</button>
          <button
            onClick={() => {
              deleteReserve(selectedRent?.id ?? 0);
              closeModal();
            }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button type='submit'>Reservar</button>
      )}
      <div>
        <div>
          <label>
            R$ {selectedHouse?.dailyPrice} x {days} noites
          </label>
          <label>Taxa de serviço</label>
          <label>Total:</label>
        </div>
        <div>
          <label>
            {' '}
            R$ {selectedHouse?.dailyPrice ? selectedHouse.dailyPrice * days : 0}
          </label>
          <label>
            {' '}
            R${' '}
            {selectedHouse?.dailyPrice
              ? selectedHouse.dailyPrice * days * 0.02
              : 0}
          </label>
          <label>
            {' '}
            R${' '}
            {selectedHouse?.dailyPrice
              ? selectedHouse.dailyPrice * days * 0.02 +
                selectedHouse.dailyPrice * days
              : 0}
          </label>
        </div>
      </div>
    </StyledForm>
  );
};

export default ReservForm;
