import React, { FC, useState, useEffect, useCallback } from 'react';
import { GridSlider } from './GridSlider';
import {
  CalendarContainer,
  ArrowButtonPrev,
  ArrowButtonNext,
  HeaderContainer,
} from './styled';
import { ErrorBoundary } from '../ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import PrevImg from 'assets/Prev.png';
import NextImg from 'assets/Next.png';
import { MonthTitle } from './MonthTitle';
import { MonthPicker } from './MonthPicker';
import { YearPicker } from './YearPicker';
import { CalendarProps } from './types';

export const Calendar: FC<CalendarProps> = (props) => {
  const {
    isMondayFirst,
    isHolidayDate,
    selectedRange,
    onDateSelect,
    getHolidayName,
    foundedDate,
    showTodo = false,
    weekendColor = 'rgba(255, 0, 0, 1)',
    holidayColor = 'rgba(255, 0, 0, 1)',
  } = props;

  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');

  useEffect(() => {
    if (foundedDate) {
      setCurrentDate(foundedDate);
    }
  }, [foundedDate]);

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleModeChange = (newMode: 'date' | 'month' | 'year') => {
    setMode(newMode);
  };

  const handleMonthSelect = (month: number) => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), month, 1));
    handleModeChange('date');
  };

  const handleYearSelect = (year: number) => {
    setCurrentDate((prev) => new Date(year, prev.getMonth(), 1));
    handleModeChange('date');
  };

  const handleMonthTitleClick = () => handleModeChange('month');
  const handleYearClick = () => handleModeChange('year');

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CalendarContainer>
          <HeaderContainer>
            {mode === 'date' && (
              <>
                <ArrowButtonPrev
                  onClick={handlePrevMonth}
                  src={PrevImg}
                  alt="Previous Month"
                />
                <MonthTitle
                  currentDate={currentDate}
                  onMonthTitleClick={handleMonthTitleClick}
                  onYearClick={handleYearClick}
                />
                <ArrowButtonNext
                  onClick={handleNextMonth}
                  src={NextImg}
                  alt="Next Month"
                />
              </>
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
          </HeaderContainer>
          {mode === 'date' && (
            <GridSlider
              isMondayFirst={isMondayFirst}
              currentDate={currentDate}
              selectedRange={selectedRange}
              onDateSelect={onDateSelect}
              isHolidayDate={isHolidayDate}
              getHolidayName={getHolidayName}
              foundedDate={foundedDate}
              showTodo={showTodo}
              weekendColor={weekendColor}
              holidayColor={holidayColor}
            />
          )}
        </CalendarContainer>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
