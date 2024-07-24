import styled from 'styled-components';

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 3px;
`;

export const DayBox = styled.div<{
  isWeekend: boolean;
  isOutsideMonth: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  text-align: center;
  background-color: ${({ isWeekend }) => (isWeekend ? '#fdd' : 'transparent')};
  border: 1px solid rgba(225, 225, 225, 0);
  border-radius: 8px;
  box-sizing: border-box;
  color: ${({ isOutsideMonth }) =>
    isOutsideMonth ? 'rgba(170, 170, 170, 1)' : 'inherit'};
`;
