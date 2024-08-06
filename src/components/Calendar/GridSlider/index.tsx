import React, { FC, useState } from 'react';
import { DaysContainer, DayBox, HolidayNameContainer } from './styled';
import { WeekdayHeader } from '../WeekdaysHeader';
import { getPreviousMonthDays } from 'utils/getPreviousMonthDays';
import { getNextMonthDays } from 'utils/getNextMonthDays';
import { getDaysInMonth } from 'utils/getDaysInMonth';
import { useHoliday } from 'hooks/useHoliday';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import {
  isWeekend,
  isToday,
  isDateInRange,
  isStartDate,
  isEndDate,
} from 'utils/dateUtils';
import { TodoManager } from 'components/DatePicker/TodoManager';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { GridSliderProps } from './types';

export const GridSlider: FC<GridSliderProps> = ({
  isMondayFirst = false,
  currentDate,
  selectedRange = { start: null, end: null },
  onDateSelect,
  isHolidayDate,
  getHolidayName,
  foundedDate,
  showTodo = false,
  weekendColor,
  holidayColor,
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);
  const prevMonthDays = getPreviousMonthDays(year, month, isMondayFirst);
  const nextMonthDays = getNextMonthDays(year, month, days, isMondayFirst);
  const allDays = [...prevMonthDays, ...days, ...nextMonthDays];
  const [pressedDate, setPressedDate] = useState<Date | null>(null);
  const [todos, setTodos] = useLocalStorage<{ [key: string]: string[] }>(
    'todos',
    {},
  );

  const { clickedHoliday, handleDayClick } = useHoliday(
    isHolidayDate,
    getHolidayName,
  );

  const handleDayClickInternal = (day: Date) => {
    if (day.getMonth() === month) {
      handleDayClick(day);
      if (onDateSelect) {
        onDateSelect(day);
      }
    }
  };

  const handleDoubleClickInternal = (day: Date) => {
    if (showTodo && day.getMonth() === month) {
      setPressedDate(day);
    }
  };

  const handleCloseTodoManager = () => {
    setPressedDate(null);
  };

  const hasTodo = (date: Date) => {
    const dateKey = date.toDateString();
    return todos[dateKey] && todos[dateKey].length > 0;
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <DaysContainer>
          <WeekdayHeader isMondayFirst={isMondayFirst} />
          {allDays.map((day) => (
            <DayBox
              key={day.toISOString()}
              isOutsideMonth={day.getMonth() !== month}
              isWeekend={isWeekend(day, isMondayFirst)}
              isToday={isToday(day)}
              isSelected={isDateInRange(day, selectedRange)}
              isFound={foundedDate?.toDateString() === day.toDateString()}
              isStartDate={isStartDate(day, selectedRange)}
              isEndDate={isEndDate(day, selectedRange)}
              isHoliday={isHolidayDate && isHolidayDate(day)}
              hasTodo={showTodo && hasTodo(day)}
              data-today={isToday(day) ? 'true' : undefined}
              onClick={() => handleDayClickInternal(day)}
              onDoubleClick={() => handleDoubleClickInternal(day)}
              weekendColor={weekendColor}
              holidayColor={holidayColor}
            >
              {day.getDate()}
            </DayBox>
          ))}
        </DaysContainer>
        {clickedHoliday.name && (
          <HolidayNameContainer>{clickedHoliday.name}</HolidayNameContainer>
        )}
        {showTodo && pressedDate && (
          <TodoManager
            pressedDate={pressedDate}
            onClose={handleCloseTodoManager}
            todos={todos}
            setTodos={setTodos}
          />
        )}
      </ThemeProvider>
    </div>
  );
};
