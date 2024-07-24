import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 340px;
  height: 251px;
  border-radius: 8px;
  border: 1px solid rgba(225, 225, 225, 1);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto 1fr;
  gap: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
`;

export const Button = styled.button`
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
