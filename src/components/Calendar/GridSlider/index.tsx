import React, { FC } from 'react';
import { DaysContainer, DayBox } from './styled';
import { WeekdayHeader } from '../WeekdaysHeader';
import { getPreviousMonthDays } from 'utils/getPreviousMonthDays';
import { getNextMonthDays } from 'utils/getNextMonthDays';
import { getDaysInMonth } from 'utils/getDaysInMonth';

type GridSliderProps = {
  isMondayFirst?: boolean;
  currentDate: Date;
  selectedRange?: { start: Date | null; end: Date | null };
  onDateSelect?: (date: Date) => void;
};

const isWeekend = (date: Date, isMondayFirst: boolean) => {
  const day = date.getDay();
  return isMondayFirst ? day === 5 || day === 6 : day === 0 || day === 6;
};

const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isDateInRange = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  if (!range.start || !range.end) return false;
  return date >= range.start && date <= range.end;
};

const isStartDate = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  return range.start ? date.getTime() === range.start.getTime() : false;
};

const isEndDate = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  return range.end ? date.getTime() === range.end.getTime() : false;
};

export const GridSlider: FC<GridSliderProps> = ({
  isMondayFirst = false,
  currentDate,
  selectedRange = { start: null, end: null },
  onDateSelect,
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
          isToday={isToday(day)}
          isSelected={isDateInRange(day, selectedRange)}
          isStartDate={isStartDate(day, selectedRange)}
          isEndDate={isEndDate(day, selectedRange)}
          data-today={isToday(day) ? 'true' : undefined}
          onClick={() => onDateSelect && onDateSelect(day)}
        >
          {day.getDate()}
        </DayBox>
      ))}
    </DaysContainer>
  );
};
