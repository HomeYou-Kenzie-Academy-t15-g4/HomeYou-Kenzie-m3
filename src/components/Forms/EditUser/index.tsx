import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
import { IUser } from '../../../providers/UserContext/type';
import Input from '../Input';
import StyledFormEditUserPic from './style';

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
    <StyledFormEditUserPic onSubmit={handleSubmit(submit)}>
      <div className='modalContentEdit'>
        <Input
          type='text'
          label='Alterar Foto Perfil'
          register={register('img')}
        />
        <button type='submit'>Alterar Foto</button>
      </div>
    </StyledFormEditUserPic>
  );
};
// label, register, type, error
export default EditUser;
