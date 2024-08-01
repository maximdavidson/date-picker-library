import React, { FC } from 'react';
import { CalendarProps } from 'components/Calendar/types';

export const withSundayFirst = (Component: FC<CalendarProps>) => {
  return (props: CalendarProps) => (
    <Component {...props} isMondayFirst={false} />
  );
};
