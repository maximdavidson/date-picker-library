import React from 'react';
import { Title } from './styled';
type MonthTitleProps = {
  currentDate: Date;
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MonthTitle: React.FC<MonthTitleProps> = ({ currentDate }) => {
  const monthName = MONTHS[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <Title>
      {monthName} {year}
    </Title>
  );
};
