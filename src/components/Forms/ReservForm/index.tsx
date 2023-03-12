import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HousesContext } from '../../../providers/HousesContext';
import { StyledDivReturnToLogin, StyledForm } from '../HouseForm/style';
import Select from 'react-select';
import SelectCalendar from '../../StyledCalendar';
import { ModalsContext } from '../../../providers/ModalsContext';
import Modal from '../../Modal';

interface IReservFormValue {
  checkin: string;
  hospedes: string;
  id: any;
}

const ReservForm = (data: any) => {
  const { createReserve, editReserve } = useContext(HousesContext);
  const { isOpen, setIsOpen, deleteButton } = useContext(ModalsContext);
  const [yourReservedDates, setYourReservedDates] = useState<Date[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReservFormValue>();

  const submit: SubmitHandler<IReservFormValue> = (formData) => {
    /*  if(deleteButton){
      editReserve()
    }else{
      createReserve()
    } */
  };

  const localStorageReseve = localStorage.getItem('@reservedDates');

  useEffect(() => {
    if (localStorageReseve) {
      let dates = JSON.parse(localStorageReseve);
      setYourReservedDates(dates);
    }
  }, []);

  const options = [
    { value: '1 hospede', label: '1 hospede' },
    { value: '2 hospedes', label: '2 hospedes' },
    { value: '3 hospedes', label: '3 hospedes' },
    { value: '4 hospedes', label: '4 hospedes' },
    { value: '5 hospedes', label: '5 hospedes' },
    { value: '6 hospedes', label: '6 hospedes' },
    { value: '7 hospedes', label: '7 hospedes' },
  ];

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledDivReturnToLogin>
        <button>Editar Reserva</button>
      </StyledDivReturnToLogin>
      {isOpen ? (
        deleteButton ? (
          <Modal title='Editar reserva'>
            <SelectCalendar />
          </Modal>
        ) : (
          <Modal title='Crie sua Reserva'>
            <SelectCalendar />
          </Modal>
        )
      ) : null}
      <div onClick={() => setIsOpen(true)}>
        {yourReservedDates.length === 0 ? (
          <h1>Escolher data</h1>
        ) : (
          <div>
            <div>
              <h3>Check-in</h3>
              <p>
                {yourReservedDates[0].toLocaleString('default', {
                  day: '2-digit',
                })}
                /
                {yourReservedDates[0].toLocaleString('default', {
                  month: '2-digit',
                })}
                /
                {yourReservedDates[0].toLocaleString('default', {
                  year: 'numeric',
                })}
              </p>
            </div>
            <div>
              <h3>Check-out</h3>
              <p>
                {yourReservedDates[yourReservedDates.length - 1].toLocaleString(
                  'default',
                  {
                    day: '2-digit',
                  }
                )}
                /
                {yourReservedDates[yourReservedDates.length - 1].toLocaleString(
                  'default',
                  {
                    month: '2-digit',
                  }
                )}
                /
                {yourReservedDates[yourReservedDates.length - 1].toLocaleString(
                  'default',
                  {
                    year: 'numeric',
                  }
                )}
              </p>
            </div>
          </div>
        )}
      </div>
      <Select placeholder='Selecione' options={options} />
      {deleteButton ? (
        <div>
          <button type='submit'>Editar</button>
          <button>Cancelar</button>
        </div>
      ) : (
        <button type='submit'>Reservar</button>
      )}
      <div>
        {/* <div>
          <label>R$ {data.price} x {data.xPrice} noites</label>
          <label>Taxa de serviço</label>
          <label>Total:</label>
        </div>
        <div>
          <label> R$ {data.totalPrice}</label>
          <label> R$ {data.totalPrice * 0.02}</label>
          <label> R$ {data.totalPrice * 0.02 + data.totalPrice}</label>
        </div> */}
      </div>
    </StyledForm>
  );
};

export default ReservForm;
