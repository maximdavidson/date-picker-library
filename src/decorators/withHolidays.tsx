import React, { FC, useState, useEffect } from 'react';
import { CalendarProps } from 'components/Calendar/types';
import { generateHolidays } from 'utils/generateHolidays';
import { getHolidayName } from 'utils/getHolidayName';

const isHoliday = (date: Date, holidays: { name: string; date: Date }[]) => {
  return holidays.some(
    (holiday) =>
      holiday.date.getDate() === date.getDate() &&
      holiday.date.getMonth() === date.getMonth() &&
      holiday.date.getFullYear() === date.getFullYear(),
  );
};

export const withHolidays = (Component: FC<CalendarProps>) => {
  const WithHolidaysComponent: FC<
    Omit<CalendarProps, 'isHolidayDate' | 'getHolidayName'>
  > = (props) => {
    const [holidays, setHolidays] = useState(
      generateHolidays(new Date().getFullYear()),
    );

    useEffect(() => {
      const currentYear = new Date().getFullYear();
      setHolidays(generateHolidays(currentYear));
    }, []);

    const checkHoliday = (date: Date) => isHoliday(date, holidays);
    const fetchHolidayName = (date: Date) => getHolidayName(date, holidays);

    return (
      <Component
        {...props}
        isHolidayDate={checkHoliday}
        getHolidayName={fetchHolidayName}
      />
    );
  };
  return WithHolidaysComponent;
};
