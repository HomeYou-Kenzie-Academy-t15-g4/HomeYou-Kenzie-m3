import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { HousesContext } from '../../providers/HousesContext';
import { ModalsContext } from '../../providers/ModalsContext';
import { StyledCalendar } from './style';

const SelectCalendar = () => {
  const { setSelectedDate, housesRent, selectedHouse, selectedRent } =
    useContext(HousesContext);
  const { setIsOpenCalendar } = useContext(ModalsContext);
  const [value, setValue] = useState<Date[]>([]);
  const [reservedDates, setReservedDates] = useState<Date[]>([]);
  const [newReserve, setNewReserve] = useState<Date[]>([]);

  useEffect(() => {
    if (selectedHouse) {
      let listHouses = housesRent.filter(
        (rent) => rent.house.id == selectedHouse.id
      );
      let arrayTest: any = [];
      listHouses.forEach((reserv) =>
        reserv.rentedDays.forEach((item) => {
          arrayTest.push(item);
        })
      );

      setReservedDates(
        arrayTest.map(
          (
            datea: string | number | Date,
            index: string | number | Date | any
          ) => {
            return (arrayTest[index] = new Date(datea));
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
      setNewReserve(tempReserve);
    };
    getDatesBetweenDates(calendarValue[0], calendarValue[1]);

    setReservedDates(tempReserve.concat(reservedDates));

    setSelectedDate(tempReserve.concat(reservedDates));
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
