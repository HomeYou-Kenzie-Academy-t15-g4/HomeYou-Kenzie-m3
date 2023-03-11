import React from 'react';
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

  if (isOpen) {
    return (
      <StyledModal className='inside' role={'dialog'}>
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
