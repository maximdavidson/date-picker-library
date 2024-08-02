import React, { FC, useState, useCallback, useEffect } from 'react';
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

  const handleMonthTitleClick = useCallback(
    () => handleModeChange('month'),
    [handleModeChange],
  );

  const handleYearClick = useCallback(
    () => handleModeChange('year'),
    [handleModeChange],
  );

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
