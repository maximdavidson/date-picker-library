import React, { FC, useState, useCallback } from 'react';
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
import { MonthTitle } from './MonthTitle';
import { MonthPicker } from './MonthPicker';
import { YearPicker } from './YearPicker';

export type CalendarProps = {
  isMondayFirst?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  isHolidayDate?: (date: Date) => boolean;
  selectedRange?: { start: Date | null; end: Date | null };
  onDateSelect?: (date: Date) => void;
};

export const Calendar: FC<CalendarProps> = (props: CalendarProps) => {
  const { isMondayFirst, isHolidayDate, selectedRange, onDateSelect } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');

  const handlePrevMonth = useCallback(() => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  }, []);

  const handleModeChange = useCallback((newMode: 'date' | 'month' | 'year') => {
    setMode(newMode);
  }, []);

  const handleMonthSelect = useCallback(
    (month: number) => {
      setCurrentDate((prev) => new Date(prev.getFullYear(), month, 1));
      handleModeChange('date');
    },
    [handleModeChange],
  );

  const handleYearSelect = useCallback(
    (year: number) => {
      setCurrentDate((prev) => new Date(year, prev.getMonth(), 1));
      handleModeChange('date');
    },
    [handleModeChange],
  );

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
              onMonthTitleClick={() => handleModeChange('month')}
              onYearClick={() => handleModeChange('year')}
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
            currentDate={currentDate}
            selectedRange={selectedRange}
            onDateSelect={onDateSelect}
            isHolidayDate={isHolidayDate}
          />
        )}
      </CalendarContainer>
    </ErrorBoundary>
  );
};
