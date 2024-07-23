import styled from 'styled-components';

// Основной контейнер календаря
const CalendarContainer = styled.div`
  width: 250px;
  height: 241px;
  border-radius: 8px;
  border: 1px solid rgba(225, 225, 225, 1);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto 1fr;
  gap: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
`;

// Контейнер для заголовков дней недели
const WeekdaysHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 36px);
  font-weight: bold;
  text-align: center;
`;

// Стили для дней месяца
const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding: 5px;
  grid-row: 2 / 3;
  align-items: start;
`;

// Стили для дней
const DayBox = styled.div`
  text-align: center;
  line-height: 30px;
  height: 30px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
  CalendarContainer,
  WeekdaysHeaderContainer,
  DaysContainer,
  DayBox,
  Button,
};
