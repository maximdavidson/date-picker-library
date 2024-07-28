import React from 'react';
import { Calendar, CalendarProps } from '../Calendar';
import { withHolidays } from 'decorators/withHolidays';

type DatePickerProps = CalendarProps & {
  withHolidays?: boolean;
};

const CalendarWithHolidays = withHolidays(Calendar);

export const DatePicker: React.FC<DatePickerProps> = ({
  withHolidays = true,
  ...props
}) => {
  if (withHolidays) {
    return <CalendarWithHolidays {...props} />;
  }
  return <Calendar {...props} />;
};
