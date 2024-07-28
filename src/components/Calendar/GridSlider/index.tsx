import React, { FC } from 'react';
import { DaysContainer, DayBox, HolidayNameContainer } from './styled';
import { WeekdayHeader } from '../WeekdaysHeader';
import { getPreviousMonthDays } from 'utils/getPreviousMonthDays';
import { getNextMonthDays } from 'utils/getNextMonthDays';
import { getDaysInMonth } from 'utils/getDaysInMonth';
import { useHoliday } from 'hooks/useHoliday';

import {
  isWeekend,
  isToday,
  isDateInRange,
  isStartDate,
  isEndDate,
} from 'utils/dateUtils';

type GridSliderProps = {
  isMondayFirst?: boolean;
  currentDate: Date;
  selectedRange?: { start: Date | null; end: Date | null };
  onDateSelect: (date: Date) => void;
  isHolidayDate: (date: Date) => boolean;
  getHolidayName: (date: Date) => string | null;
};

export const GridSlider: FC<GridSliderProps> = ({
  isMondayFirst = false,
  currentDate,
  selectedRange = { start: null, end: null },
  onDateSelect,
  isHolidayDate,
  getHolidayName,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);
  const prevMonthDays = getPreviousMonthDays(year, month, isMondayFirst);
  const nextMonthDays = getNextMonthDays(year, month, days, isMondayFirst);
  const allDays = [...prevMonthDays, ...days, ...nextMonthDays];

  const { clickedHoliday, handleDayClick } = useHoliday(
    isHolidayDate,
    getHolidayName,
  );

  return (
    <div>
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
            isHoliday={isHolidayDate && isHolidayDate(day)}
            data-today={isToday(day) ? 'true' : undefined}
            onClick={() => {
              handleDayClick(day);
              if (onDateSelect) {
                onDateSelect(day);
              }
            }}
          >
            {day.getDate()}
          </DayBox>
        ))}
      </DaysContainer>
      {clickedHoliday.name && (
        <HolidayNameContainer>{clickedHoliday.name}</HolidayNameContainer>
      )}
    </div>
  );
};
