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
  isToday?: boolean;
  isSelected?: boolean;
  isStartDate?: boolean;
  isEndDate?: boolean;
  isHoliday?: boolean;
}>`
  font-size: 13px;
  padding: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ isToday, isSelected, isStartDate, isEndDate }) => {
    if (isStartDate) return 'rgba(47, 128, 237, 0.6)';
    if (isEndDate) return 'rgba(47, 128, 237, 1)';
    if (isSelected) return 'rgba(47, 128, 237, 0.1)';
    return isToday ? 'rgba(47, 128, 237, 1)' : 'transparent';
  }};
  border: 1px solid rgba(225, 225, 225, 0);
  box-sizing: border-box;
  &:not([data-today='true']):hover {
    background-color: rgba(241, 241, 241, 1);
  }
  color: ${({
    isToday,
    isOutsideMonth,
    isWeekend,
    isStartDate,
    isEndDate,
    isHoliday,
  }) => {
    if (isStartDate || isEndDate) return 'rgba(255, 255, 255, 1)';
    if (isToday) return 'rgba(255, 255, 255, 1)';
    if (isOutsideMonth) return 'rgba(170, 170, 170, 1)';
    if (isWeekend) return 'rgba(255, 0, 0, 1)';
    if (isHoliday) return 'rgba(255, 0, 0, 1)';
    return 'inherit';
  }};
  border-radius: ${({ isStartDate, isEndDate, isSelected }) => {
    if (isStartDate) return '8px 0px 0px 8px';
    if (isEndDate) return '0px 8px 8px 0px';
    if (isSelected) return '0';
    return '8px';
  }};
`;
