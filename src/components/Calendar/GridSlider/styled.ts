import styled, { css } from 'styled-components';

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
  isStartOrEnd?: boolean;
}>`
  font-size: 13px;
  padding: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ isToday }) =>
    isToday ? 'rgba(47, 128, 237, 1)' : 'transparent'};
  border: 1px solid rgba(225, 225, 225, 0);
  border-radius: 8px;
  box-sizing: border-box;
  &:not([data-today='true']):hover {
    background-color: rgba(241, 241, 241, 1);
  }
  ${(props) =>
    props.isStartOrEnd &&
    css`
      background-color: rgba(0, 123, 255, 1);
      color: #fff;
    `}
  ${(props) =>
    props.isSelected &&
    !props.isStartOrEnd &&
    css`
      background-color: rgba(0, 123, 255, 0.3);
    `}
  color: ${({ isToday, isOutsideMonth, isWeekend }) =>
    isToday
      ? 'rgba(255, 255, 255, 1)'
      : isOutsideMonth
        ? 'rgba(170, 170, 170, 1)'
        : isWeekend
          ? 'red'
          : 'inherit'};
`;
