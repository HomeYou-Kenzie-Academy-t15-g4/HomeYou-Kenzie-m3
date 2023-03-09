import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
import { IUser } from '../../../providers/UserContext/type';

interface IEditForm {
  email?: string;
  password?: string;
  name?: string;
  age?: string;
  photo?: string;
  city?: string;
  state?: string;
}

const EditUser = () => {
  const { editUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>();

  const submit: SubmitHandler<IUser> = (formData) => {
    editUser(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <fieldset>
        <label>Alterar Foto Perfil</label>
        <input type='text' id='image' {...register('img')} />
      </fieldset>
      <button type='submit'>Entrar</button>
    </form>
  );
};

export default EditUser;
