import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext';
import { IUser } from '../../../providers/UserContext/type';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
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
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledFormEditUserPic>
        <Input
          type='text'
          label='Alterar Foto Perfil'
          register={register('img')}
        />
        <StyledButton
          type={'submit'}
          $buttonSize='medium'
          $buttonStyle='greenBold'
        >
          Alterar Foto
        </StyledButton>
      </StyledFormEditUserPic>
    </StyledForm>
  );
};

export default EditUser;
