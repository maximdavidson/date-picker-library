import React from 'react';
import { DaysContainer, DayBox } from './styled';
import { WeekdayHeader } from '../WeekdaysHeader';
import { getPreviousMonthDays } from 'utils/getPreviousMonthDays';
import { getNextMonthDays } from 'utils/getNextMonthDays';

type GridSliderProps = {
  isMondayFirst?: boolean;
  type?: string;
  currentDate: Date;
};

const getDaysInMonth = (year: number, month: number) => {
  return new Array(31)
    .fill('')
    .map((_, i) => new Date(year, month, i + 1))
    .filter((date) => date.getMonth() === month);
};

const isWeekend = (date: Date, isMondayFirst: boolean) => {
  const day = date.getDay();
  return isMondayFirst ? day === 5 || day === 6 : day === 0 || day === 6;
};

export const GridSlider: React.FC<GridSliderProps> = ({
  isMondayFirst = false,
  type,
  currentDate,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);
  const prevMonthDays = getPreviousMonthDays(year, month);
  const nextMonthDays = getNextMonthDays(year, month, days);

  const allDays = [...prevMonthDays, ...days, ...nextMonthDays];

  return (
    <DaysContainer>
      <WeekdayHeader isMondayFirst={isMondayFirst} />
      {allDays.map((day) => (
        <DayBox
          key={day.toISOString()}
          isOutsideMonth={day.getMonth() !== month}
          isWeekend={isWeekend(day, isMondayFirst)}
        >
          {day.getDate()}
        </DayBox>
      ))}
    </DaysContainer>
  );
};
