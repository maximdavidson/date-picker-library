import React, { FC } from 'react';
import { SHORT_MONTHS } from 'constants/shortMonth';
import { PickerContainer, PickerItem } from './styled';
import { MonthPickerProps } from './types';

export const MonthPicker: FC<MonthPickerProps> = ({
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
