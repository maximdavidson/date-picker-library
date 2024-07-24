import React, { useCallback } from 'react';
import { useDate } from '../../providers/DateProviders';
import { GridSlider } from './GridSlider';
import { DayOfWeekGrid } from './DayofWeekGrid/';
import { Button, CalendarContainer } from './styled';
import { ErrorBoundary } from '../ErrorBoundary';

export type CalendarProps = {
  type?: 'Month' | 'Week';
  isMondayFirst?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  isWithRange?: boolean;
  minDate?: Date;
  maxDate?: Date;
  isTodosEnabled?: boolean;
  isHolidayDate?: (date: Date) => boolean;
};

const CALENDAR_TYPES = {
  Month: 'Month',
  Week: 'Week',
};

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const {
    type = CALENDAR_TYPES.Month,
    isMondayFirst,
    isWeekendDate,
    isWithRange,
    minDate,
    maxDate,
    isTodosEnabled,
    isHolidayDate,
  } = props;

  const { range, clearRange } = useDate();

  const handleClearButtonClick = useCallback(() => {
    clearRange();
  }, [clearRange]);

  const isRangeExist =
    isWithRange && Boolean(range?.rangeStart) && Boolean(range?.rangeEnd);

  return (
    <ErrorBoundary>
      <div>
        <CalendarContainer>
          <GridSlider
            isMondayFirst={isMondayFirst}
            maxDate={maxDate}
            minDate={minDate}
            type={type}
          />
          <DayOfWeekGrid
            isHolidayDate={isHolidayDate}
            isMondayFirst={isMondayFirst}
            isTodosEnabled={isTodosEnabled}
            isWeekendDate={isWeekendDate}
            isWithRange={isWithRange}
            maxDate={maxDate}
            minDate={minDate}
            type={type}
          />
        </CalendarContainer>
        {isRangeExist && (
          <Button onClick={handleClearButtonClick}>Clear</Button>
        )}
      </div>
    </ErrorBoundary>
  );
};
