import React, { FC } from 'react';
import { CalendarProps } from 'components/Calendar/types';

export const withMondayFirst = (Component: FC<CalendarProps>) => {
  return (props: CalendarProps) => (
    <Component {...props} isMondayFirst={true} />
  );
};
