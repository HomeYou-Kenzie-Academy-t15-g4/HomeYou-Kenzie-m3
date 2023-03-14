import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { toast } from 'react-toastify';
import { HousesContext } from '../../providers/HousesContext';
import { ModalsContext } from '../../providers/ModalsContext';
import { StyledButton } from '../../styles/button';
import { StyledCaption, StyledTitle } from '../../styles/typograthy';
import { StyledCalendar } from './style';

const SelectCalendar = () => {
  const {
    setSelectedDate,
    selectedDate,
    housesRent,
    selectedHouse,
    selectedRent,
  } = useContext(HousesContext);
  const { setIsOpenCalendar, calendarValue, setCalendarValue } =
    useContext(ModalsContext);
  const [reservedDates, setReservedDates] = useState<Date[]>([]);

  useEffect(() => {
    if (selectedHouse) {
      let listHouses = housesRent.filter(
        (rent) =>
          rent.house.id == selectedHouse.id && rent.id !== selectedRent?.id
      );
      let supArray: any = [];
      listHouses.forEach((reserv) =>
        reserv.rentedDays.forEach((item) => {
          supArray.push(item);
        })
      );

      setReservedDates(
        supArray.map(
          (datea: string | number | Date, index: string | number) => {
            return (supArray[index] = new Date(datea));
          }
        )
      );
    }
  }, [selectedHouse]);

  const onChange = (calendarValue: Date[]) => {
    let tempReserve: Date[] = [new Date(), new Date()];
    const getDatesBetweenDates = (startDate: Date, endDate: Date) => {
      let tempDates: Date[] = [];
      const theDate = new Date(startDate);
      while (theDate < new Date(endDate)) {
        tempDates = [...tempDates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
      }
      tempReserve = [...tempDates, new Date(endDate)];
    };
    getDatesBetweenDates(calendarValue[0], calendarValue[1]);

    const hasCommonDate = tempReserve.some((date) => {
      return reservedDates.some((reservedDate) => {
        return date.getTime() === reservedDate.getTime();
      });
    });
    console.log(hasCommonDate, 'hasCommonDate');

    if (hasCommonDate) {
      toast.warn('Período indisponível');
    } else {
      setSelectedDate(tempReserve);
      setCalendarValue(calendarValue);
    }
  };

  const confirmReserveDate = () => {
    setReservedDates(selectedDate?.concat(reservedDates) ?? reservedDates);
    setIsOpenCalendar(false);
  };

  return (
    <StyledCalendar>
      <Calendar
        selectRange
        minDate={new Date()}
        defaultActiveStartDate={new Date()}
        onChange={onChange}
        value={calendarValue}
        tileDisabled={({ date, view }) =>
          view === 'month' &&
          reservedDates?.some(
            (disabledDate) =>
              date?.getFullYear() === disabledDate?.getFullYear() &&
              date?.getMonth() === disabledDate?.getMonth() &&
              date?.getDate() === disabledDate?.getDate()
          )
        }
      />
      {selectedDate && (
        <div className='calendarResum'>
          <StyledTitle
            tag='h3'
            $fontSize='two'
            $fontColor='greyBold'
            $textAlign='right'
          >
            {selectedDate.length - 2 == 1
              ? 'Uma noite'
              : `${selectedDate.length - 2} noites`}
          </StyledTitle>

          <StyledButton
            onClick={confirmReserveDate}
            $buttonSize='short'
            $buttonStyle='greenBold'
          >
            Confirmar
          </StyledButton>
        </div>
      )}
    </StyledCalendar>
  );
};

export default SelectCalendar;
