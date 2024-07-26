import React from 'react';
import { Title, Month, Year } from './styled';
import { MONTHS } from 'constants/months';

type MonthTitleProps = {
  currentDate: Date;
  onMonthTitleClick: () => void;
  onYearClick: () => void;
};

export const MonthTitle: React.FC<MonthTitleProps> = ({
  currentDate,
  onMonthTitleClick,
  onYearClick,
}) => {
  const monthName = MONTHS[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <Title>
      <Month onClick={onMonthTitleClick}>{monthName}</Month>
      <Year onClick={onYearClick}>{year}</Year>
    </Title>
  );
};
