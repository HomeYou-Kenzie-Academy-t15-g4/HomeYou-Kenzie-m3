import styled from 'styled-components';

export const StyledReservForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 23px;

  .formArea {
    .noSelectedDates {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      height: 60px;
      border-radius: 20px 20px 0 0;
    }
    .selectedDates {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid black;
      height: 60px;
      border-radius: 20px 20px 0 0;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
      }
    }
    .checkIn {
      border-right: 1px solid black;
    }
  }
  .editReservButtons {
    margin-top: 13px;
    display: flex;
    gap: 23px;
    flex-direction: column;
    button {
      border-radius: 20px;
    }
  }
  .reservFormErrors{
    margin-top: -20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }

  .reservButton {
    border-radius: 20px;
  }

  .daysPrice,
  .totalPrice {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .resumCalc {
    font-family: Montserrat;
    font-size: 0.85rem;
    font-weight: 500;
    color: #000;
  }
  .totalPrice {
    font-family: Montserrat;
    font-size: 0.95rem;
    font-weight: 700;
    color: #000;
  }
`;

export const reactSelectReservStyle = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '1rem',
    lineHeight: '1.4375em',
    letterSpacing: '0.00938em',
    borderRadius: '0 0 20px 20px',
    minHeight: '60px',
    width: '280px',
    borderColor: 'rgba(0, 0, 0, 0.87)',
    color: 'rgba(0, 0, 0, 0.4)',
    cursor: 'text',
    border: state.isSelected ? 'none' : '1px solid rgba(0, 0, 0, 0.87)',
    outline: state.isFocused ? '0px solid rgba(0, 0, 0, 0.87)' : 'none',
    borderTop: 'none',
    paddingLeft: '6px',
  }),
  menuList: (baseStyles: any, state: any) => ({
    ...baseStyles,
    fontFamily: 'Montserrat',
  }),
};
