import React, { FC } from 'react';
import { Calendar } from '../Calendar';
import { CalendarProps } from '../Calendar/types';
import { withRange } from 'decorators/withRange';

type DateRangePickerProps = CalendarProps;

const CalendarWithRange = withRange(Calendar);

export const DateRangePicker: FC<DateRangePickerProps> = (props) => {
  return <CalendarWithRange {...props} />;
};
