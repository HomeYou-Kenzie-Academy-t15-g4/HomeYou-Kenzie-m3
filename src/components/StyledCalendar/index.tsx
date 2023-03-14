import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { HousesContext } from '../../providers/HousesContext';
import { ModalsContext } from '../../providers/ModalsContext';
import { UserContext } from '../../providers/UserContext';
import { StyledCalendar } from './style';

const SelectCalendar = () => {
  const { setSelectedDate, housesRent, selectedHouse, selectedRent } =
    useContext(HousesContext);
  const { setIsOpenCalendar } = useContext(ModalsContext);
  const [value, setValue] = useState<Date[]>([]);
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

    setReservedDates(tempReserve.concat(reservedDates));

    setSelectedDate(tempReserve);
    setValue(calendarValue);
    setIsOpenCalendar(false);
  };

  return (
    <StyledCalendar>
      <Calendar
        selectRange
        minDate={new Date()}
        defaultActiveStartDate={new Date()}
        onChange={onChange}
        value={value}
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
    </StyledCalendar>
  );
};

export default SelectCalendar;
