import React from 'react';
import { DaysContainer, DayBox } from './styled';
import { WeekdayHeader } from '../WeekdaysHeader';
import { getPreviousMonthDays } from 'utils/getPreviousMonthDays';
import { getNextMonthDays } from 'utils/getNextMonthDays';

type GridSliderProps = {
  isMondayFirst?: boolean;
  type?: string;
  currentDate: Date;
  selectedRange?: { start: Date | null; end: Date | null }; //-
  onDateSelect?: (date: Date) => void; //-
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
//-
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

const isStartOrEndDate = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  if (!range.start) return false;
  return (
    date.getTime() === range.start.getTime() ||
    (range.end && date.getTime() === range.end.getTime())
  );
};
//-
export const GridSlider: React.FC<GridSliderProps> = ({
  isMondayFirst = false,
  type,
  currentDate,
  selectedRange = { start: null, end: null }, //-
  onDateSelect, //-
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
          //-
          isToday={isToday(day)}
          isSelected={isDateInRange(day, selectedRange)}
          isStartOrEnd={isStartOrEndDate(day, selectedRange) || undefined}
          data-today={isToday(day) ? 'true' : undefined}
          onClick={() => onDateSelect && onDateSelect(day)}
          //-
        >
          {day.getDate()}
        </DayBox>
      ))}
    </DaysContainer>
  );
};
