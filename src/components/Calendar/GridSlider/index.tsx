import React from 'react';
import { DaysContainer, DayBox } from './styled';
import { WeekdayHeader } from '../WeekdaysHeader';

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

const getPreviousMonthDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const prevMonth = new Date(year, month - 1, 1);
  const daysInPrevMonth = new Array(firstDayOfMonth)
    .fill('')
    .map(
      (_, i) =>
        new Date(
          prevMonth.getFullYear(),
          prevMonth.getMonth(),
          prevMonth.getDate() - (firstDayOfMonth - i),
        ),
    );
  return daysInPrevMonth;
};

const getNextMonthDays = (year: number, month: number, daysInMonth: Date[]) => {
  const lastDayOfMonth = daysInMonth[daysInMonth.length - 1].getDay();
  const totalDaysInWeek = 7;
  const daysToShow = totalDaysInWeek - (lastDayOfMonth + 1);
  const nextMonth = new Date(year, month + 1, 1);
  const daysInNextMonth = new Array(daysToShow)
    .fill('')
    .map(
      (_, i) => new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i + 1),
    );
  return daysInNextMonth;
};

export const GridSlider: React.FC<GridSliderProps> = ({
  isMondayFirst = false,
  minDate,
  maxDate,
  type,
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

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
          isWeekend={day.getDay() === 0 || day.getDay() === 6}
          isOutsideMonth={day.getMonth() !== month}
        >
          {day.getDate()}
        </DayBox>
      ))}
    </DaysContainer>
  );
};
