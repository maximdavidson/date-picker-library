import React from 'react';
import { SHORT_MONTHS } from 'constants/shortMonth';
import { PickerContainer, PickerItem } from './styled';

type MonthPickerProps = {
  currentMonth: number;
  onMonthSelect: (month: number) => void;
};

export const MonthPicker: React.FC<MonthPickerProps> = ({
  currentMonth,
  onMonthSelect,
}) => {
  return (
    <PickerContainer>
      {SHORT_MONTHS.map((month, index) => (
        <PickerItem
          key={index}
          onClick={() => onMonthSelect(index)}
          className={index === currentMonth ? 'selected' : ''}
        >
          {month}
        </PickerItem>
      ))}
    </PickerContainer>
  );
};
