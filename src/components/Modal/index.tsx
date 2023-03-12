import React, { useEffect, useState } from 'react';
import StyledModal from './style';

import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import { ModalsContext } from '../../providers/ModalsContext';
import { StyledTitle } from '../../styles/typograthy';

interface IModalProps {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: IModalProps) => {
  const { isOpen, closeModal } = useContext(ModalsContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isOpen) {
    return (
      <StyledModal className='box' role={'dialog'}>
        <div className='inside'>
          <header>
            <StyledTitle
              $fontSize='two'
              children={title}
              tag='h3'
              className='s'
            ></StyledTitle>
            <MdClose onClick={() => closeModal()} />
          </header>
          {children}
        </div>
      </StyledModal>
    );
  }

  return null;
};

export default Modal;
