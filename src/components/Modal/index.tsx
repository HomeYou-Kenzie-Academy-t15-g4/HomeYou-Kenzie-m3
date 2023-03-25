import React, { useEffect, useContext } from 'react';
import { MdClose } from 'react-icons/md';

import StyledModal from './style';
import { ModalsContext } from '../../providers/ModalsContext';
import { StyledCaption, StyledTitle } from '../../styles/typograthy';

interface IModalProps {
  children: React.ReactNode;
  title: string;
  price?: string;
}

const Modal = ({ children, title, price }: IModalProps) => {
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
            {price && (
              <span className='createReserv'>
                <StyledTitle
                  tag='h3'
                  $fontColor='greyBold'
                  $fontSize='three'
                  $textAlign='left'
                >
                  R${price}
                </StyledTitle>
                <StyledCaption className='modal-sub-title'>noite</StyledCaption>
              </span>
            )}
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
  }else {
    return null;
  }
};

export default Modal;
