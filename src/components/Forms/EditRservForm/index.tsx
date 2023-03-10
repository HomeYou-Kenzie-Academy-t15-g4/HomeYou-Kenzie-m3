import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HousesContext } from '../../../providers/HousesContext';

interface IEditReservFormValue {
  checkin: string;
  hospedes: string;
}

const EditReservForm = () => {
  const {} = useContext(HousesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEditReservFormValue>();

  const submit: SubmitHandler<IEditReservFormValue> = (formData) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <fieldset>
        <label>Editar Reserva</label>
      </fieldset>
      <fieldset>
        <label>Senha</label>
      </fieldset>
      <button type='submit'>Editar</button>
      <button>Cancelar</button>
      <label>R$ 423 x 6 noites R$ 2540</label>
      <label>Taxa de serviço R$ 150</label>
      <label>Total: R$ 2690</label>
    </form>
  );
};

export default EditReservForm;
