import React from 'react';
import { Title } from './styled';
import { MONTHS } from 'constants/months';

type MonthTitleProps = {
  currentDate: Date;
};

export const MonthTitle: React.FC<MonthTitleProps> = ({ currentDate }) => {
  const monthName = MONTHS[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <Title>
      {monthName} {year}
    </Title>
  );
};
