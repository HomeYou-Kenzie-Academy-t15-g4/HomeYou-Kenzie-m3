import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';

import { ModalsContext } from '../../../providers/ModalsContext';
import { UserContext } from '../../../providers/UserContext';
import { IUser } from '../../../providers/UserContext/type';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import StyledFormEditUserPic from './style';

const EditUser = () => {
  const { editUser, loading } = useContext(UserContext);
  const { closeModal } = useContext(ModalsContext);
  const {
    register,
    handleSubmit,
    formState: {},
    reset,
  } = useForm<IUser>();

  const submit: SubmitHandler<IUser> = (formData) => {
    editUser(formData);
    reset();
    setTimeout(() => {
      closeModal();
    }, 1000);
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
          {loading ? <CgSpinnerTwo className='spinner' /> : 'Alterar foto'}
        </StyledButton>
      </StyledFormEditUserPic>
    </StyledForm>
  );
};

export default EditUser;
