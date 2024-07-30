import React from 'react';
import { Calendar } from '../Calendar';
import { CalendarProps } from '../Calendar/types';
import { withRange } from 'decorators/withRange';

type DateRangePickerProps = CalendarProps;

const CalendarWithRange = withRange(Calendar);

export const DateRangePicker: React.FC<DateRangePickerProps> = (props) => {
  return <CalendarWithRange {...props} />;
};
