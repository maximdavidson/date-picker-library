import React from 'react';
import { Calendar, CalendarProps } from '../Calendar';
import { withRange } from 'decorators/withRange';

type DateRangePickerProps = CalendarProps;

const CalendarWithRange = withRange(Calendar);

export const DateRangePicker: React.FC<DateRangePickerProps> = (props) => {
  return <CalendarWithRange {...props} />;
};
