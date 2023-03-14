import React, { useEffect } from 'react';
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
  const { isOpen, isOpenCalendar, closeModal, closeModalCalendar } =
    useContext(ModalsContext);

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
            <MdClose
              onClick={() =>
                isOpenCalendar ? closeModalCalendar() : closeModal()
              }
            />
          </header>
          {children}
        </div>
      </StyledModal>
    );
  }

  return null;
};

export default Modal;
