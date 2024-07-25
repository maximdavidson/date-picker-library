import React, { useState, useCallback } from 'react';
import { useDate } from '../../providers/DateProviders';
import { GridSlider } from './GridSlider';
import { DayOfWeekGrid } from './DayofWeekGrid/';
import {
  Button,
  CalendarContainer,
  ArrowButtonPrev,
  ArrowButtonNext,
  HeaderContainer,
} from './styled';
import { ErrorBoundary } from '../ErrorBoundary';
import PrevImg from '../../assets/Prev.png';
import NextImg from '../../assets/Next.png';
import { MonthTitle } from './MonthTitle';

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

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleClearButtonClick = useCallback(() => {
    clearRange();
  }, [clearRange]);

  const isRangeExist =
    isWithRange && Boolean(range?.rangeStart) && Boolean(range?.rangeEnd);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return newDate;
    });
  };

  return (
    <ErrorBoundary>
      <CalendarContainer>
        <HeaderContainer>
          <ArrowButtonPrev
            onClick={handlePrevMonth}
            src={PrevImg}
            alt="Previous Month"
          />
          <MonthTitle currentDate={currentDate} />
          <ArrowButtonNext
            onClick={handleNextMonth}
            src={NextImg}
            alt="Next Month"
          />
        </HeaderContainer>
        <GridSlider
          isMondayFirst={isMondayFirst}
          maxDate={maxDate}
          minDate={minDate}
          type={type}
          currentDate={currentDate}
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
          currentDate={currentDate}
        />
        {isRangeExist && (
          <Button onClick={handleClearButtonClick}>Clear</Button>
        )}
      </CalendarContainer>
    </ErrorBoundary>
  );
};
