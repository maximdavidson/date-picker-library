import React, { useState, ChangeEvent, FC, KeyboardEvent } from 'react';
import { Calendar, CalendarProps } from '../Calendar';
import { withHolidays } from 'decorators/withHolidays';
import { Modal } from './Modal';

type DatePickerProps = CalendarProps & {
  withHolidays?: boolean;
};

const CalendarWithHolidays = withHolidays(Calendar);

const isValidDate = (date: string) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20[0-9]{2})$/;
  return regex.test(date);
};

export const DatePicker: FC<DatePickerProps> = ({
  withHolidays = true,
  ...props
}) => {
  const [date, setDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState('Choose Date');
  const [isDateValid, setIsDateValid] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDate(value);
    setIsDateValid(isValidDate(value));
  };

  const handleInputFocus = () => {
    setIsCalendarVisible(true);
    setPlaceholder('dd/mm/yyyy');
  };

  const handleInputBlur = () => {
    if (!date) {
      setPlaceholder('Choose Date');
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/'];
    if (
      !allowedKeys.includes(event.key) &&
      !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  const handleClear = () => {
    setDate('');
    setIsCalendarVisible(true);
    setPlaceholder('Choose Date');
    setIsDateValid(false);
  };

  const parsedDate = isValidDate(date)
    ? new Date(date.split('/').reverse().join('-'))
    : null;

  return (
    <div>
      <Modal
        value={date}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        onClear={handleClear}
        placeholder={placeholder}
        isDateValid={isDateValid}
      />
      {isCalendarVisible &&
        (withHolidays ? (
          <CalendarWithHolidays {...props} foundedDate={parsedDate} />
        ) : (
          <Calendar {...props} foundedDate={parsedDate} />
        ))}
    </div>
  );
};
