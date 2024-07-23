import React from 'react';
import { DaysContainer, DayBox } from '../styled';

type GridSliderProps = {
  isMondayFirst?: boolean;
  minDate?: Date;
  maxDate?: Date;
  type?: string;
};

const getDaysInMonth = (year: number, month: number) => {
  return new Array(31)
    .fill('')
    .map((_, i) => new Date(year, month, i + 1))
    .filter((date) => date.getMonth() === month);
};

const GridSlider: React.FC<GridSliderProps> = ({
  isMondayFirst,
  minDate,
  maxDate,
  type,
}) => {
  const days = getDaysInMonth(new Date().getFullYear(), new Date().getMonth());

  return (
    <DaysContainer>
      {days.map((day) => (
        <DayBox key={day.toISOString()}>{day.getDate()}</DayBox>
      ))}
    </DaysContainer>
  );
};

export { GridSlider };
