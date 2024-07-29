import React, { useState, ChangeEvent, FC } from 'react';
import { Calendar, CalendarProps } from '../Calendar';
import { withHolidays } from 'decorators/withHolidays';
import { Modal } from './Modal';

type DatePickerProps = CalendarProps & {
  withHolidays?: boolean;
};

const CalendarWithHolidays = withHolidays(Calendar);

export const DatePicker: FC<DatePickerProps> = ({
  withHolidays = true,
  ...props
}) => {
  const [date, setDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleInputClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleClear = () => {
    setDate('');
    setIsCalendarVisible(false);
  };

  return (
    <div>
      <Modal
        value={date}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onClear={handleClear}
      />
      {isCalendarVisible &&
        (withHolidays ? (
          <CalendarWithHolidays {...props} />
        ) : (
          <Calendar {...props} />
        ))}
    </div>
  );
};
