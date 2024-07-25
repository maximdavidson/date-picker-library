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
import { MonthTitle } from './MonthTitle';
import { CALENDAR_TYPES } from 'constants/calendarTipes';

export type CalendarProps = {
  type?: 'Month' | 'Week';
  isMondayFirst?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  isHolidayDate?: (date: Date) => boolean;
};

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const {
    type = CALENDAR_TYPES.Month,
    isMondayFirst,
    isWeekendDate,
    isHolidayDate,
  } = props;

  const [currentDate, setCurrentDate] = useState(new Date());

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
          type={type}
          currentDate={currentDate}
        />
      </CalendarContainer>
    </ErrorBoundary>
  );
};
