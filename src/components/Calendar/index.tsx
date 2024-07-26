import React, { useState } from 'react';
import { GridSlider } from './GridSlider';
import {
  CalendarContainer,
  ArrowButtonPrev,
  ArrowButtonNext,
  HeaderContainer,
} from './styled';
import { ErrorBoundary } from '../ErrorBoundary';
import PrevImg from 'assets/Prev.png';
import NextImg from 'assets/Next.png';
import { CALENDAR_TYPES } from 'constants/calendarTypes';
import { MonthTitle } from './MonthTitle';
import { MonthPicker } from './MonthPicker';
import { YearPicker } from './YearPicker';

export type CalendarProps = {
  type?: 'Month' | 'Week';
  isMondayFirst?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  isHolidayDate?: (date: Date) => boolean;
  //-
  selectedRange?: { start: Date | null; end: Date | null };
  onDateSelect?: (date: Date) => void;
  //-
};

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const {
    type = CALENDAR_TYPES.Month,
    isMondayFirst,
    isWeekendDate,
    isHolidayDate,
    //-
    selectedRange,
    onDateSelect,
    //-
  } = props;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');

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

  const handleMonthTitleClick = () => {
    setMode('month');
  };

  const handleYearClick = () => {
    setMode('year');
  };

  const handleMonthSelect = (month: number) => {
    const newDate = new Date(currentDate.getFullYear(), month, 1);
    setCurrentDate(newDate);
    setMode('date');
  };

  const handleYearSelect = (year: number) => {
    const newDate = new Date(year, currentDate.getMonth(), 1);
    setCurrentDate(newDate);
    setMode('date');
  };

  return (
    <ErrorBoundary>
      <CalendarContainer>
        <HeaderContainer>
          {mode === 'date' && (
            <ArrowButtonPrev
              onClick={handlePrevMonth}
              src={PrevImg}
              alt="Previous Month"
            />
          )}
          {mode === 'date' && (
            <MonthTitle
              currentDate={currentDate}
              onMonthTitleClick={handleMonthTitleClick}
              onYearClick={handleYearClick}
            />
          )}
          {mode === 'month' && (
            <MonthPicker
              currentMonth={currentDate.getMonth()}
              onMonthSelect={handleMonthSelect}
            />
          )}
          {mode === 'year' && (
            <YearPicker
              currentYear={currentDate.getFullYear()}
              onYearSelect={handleYearSelect}
            />
          )}
          {mode === 'date' && (
            <ArrowButtonNext
              onClick={handleNextMonth}
              src={NextImg}
              alt="Next Month"
            />
          )}
        </HeaderContainer>
        {mode === 'date' && (
          <GridSlider
            isMondayFirst={isMondayFirst}
            type={type}
            currentDate={currentDate}
            //-
            selectedRange={selectedRange}
            onDateSelect={onDateSelect}
            //-
          />
        )}
      </CalendarContainer>
    </ErrorBoundary>
  );
};
