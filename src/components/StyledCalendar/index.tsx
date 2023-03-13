import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { HousesContext } from '../../providers/HousesContext';
import './app.css';
import { StyledCalendar } from './style';

const SelectCalendar = (data: any) => {
  const { selectedDate, setSelectedDate } = useContext(HousesContext);
  const [value, setValue] = useState<Date[]>([]);
  const [reservedDates, setReservedDates] = useState<Date[]>([]);
  const [newReserve, setNewReserve] = useState<Date[]>([]);

  useEffect(() => {
    if (data) {
      let formatDate = data.rentedDays;
      formatDate.map(
        (datea: string | number | Date, index: string | number) => {
          formatDate[index] = new Date(datea);
        }
      );
      setReservedDates(formatDate);
    }
  }, []);

  const onChange = (calendarValue: Date[]) => {
    let tempReserve: Date[] = [new Date(), new Date()];
    console.log(tempReserve);

    const getDatesBetweenDates = (startDate: Date, endDate: Date) => {
      let tempDates: Date[] = [];
      const theDate = new Date(startDate);
      while (theDate < new Date(endDate)) {
        tempDates = [...tempDates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
      }
      tempReserve = [...tempDates, new Date(endDate)];
      setNewReserve(tempReserve);
    };
    getDatesBetweenDates(calendarValue[0], calendarValue[1]);

    setReservedDates(tempReserve.concat(reservedDates));

    setSelectedDate(tempReserve.concat(reservedDates));
    setValue(calendarValue);
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
