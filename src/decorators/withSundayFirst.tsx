import React from 'react';
import { CalendarProps } from 'components/Calendar/types';

export const withSundayFirst = (Component: React.FC<CalendarProps>) => {
  return (props: CalendarProps) => (
    <Component {...props} isMondayFirst={false} />
  );
};
