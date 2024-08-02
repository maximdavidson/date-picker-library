import styled from 'styled-components';

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1px;
`;

export const DayBox = styled.div<{
  isOutsideMonth: boolean;
  isWeekend: boolean;
  isToday: boolean;
  isSelected: boolean;
  isStartDate: boolean;
  isEndDate: boolean;
  isHoliday: boolean;
  isFound: boolean;
  hasTodo: boolean;
  weekendColor: string;
  holidayColor: string;
}>`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 8px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color: ${({
    isToday,
    isSelected,
    isStartDate,
    isEndDate,
    isFound,
    theme,
  }) => {
    if (isStartDate) return theme.colors.primaryLight;
    if (isEndDate) return theme.colors.primary;
    if (isSelected) return theme.colors.primaryLighter;
    if (isFound) return theme.colors.primaryLight;
    return isToday ? theme.colors.primary : 'transparent';
  }};
  border: 1px solid rgba(225, 225, 225, 0);
  box-sizing: border-box;
  &:not([data-today='true']):hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  color: ${({
    isToday,
    isOutsideMonth,
    isWeekend,
    isStartDate,
    isEndDate,
    isHoliday,
    isFound,
    hasTodo,
    weekendColor,
    holidayColor,
    theme,
  }) => {
    if (hasTodo) return theme.colors.todo;
    if (isStartDate || isEndDate) return theme.colors.white;
    if (isToday) return theme.colors.white;
    if (isOutsideMonth) return theme.colors.grey;
    if (isWeekend) return weekendColor;
    if (isHoliday) return holidayColor;
    if (isFound) return theme.colors.white;
    return 'inherit';
  }};
  border-radius: ${({ isStartDate, isEndDate, isSelected, isFound, theme }) => {
    if (isStartDate) return `${theme.borderRadius} 0 0 ${theme.borderRadius}`;
    if (isEndDate) return `0 ${theme.borderRadius} ${theme.borderRadius} 0`;
    if (isSelected) return '0';
    if (isFound) return theme.borderRadius;
    return theme.borderRadius;
  }};
`;

export const HolidayNameContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 50px;
  margin-top: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`;
