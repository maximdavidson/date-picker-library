import React, { FC, useCallback } from 'react';
import { SHORT_MONTHS } from 'constants/shortMonth';
import { PickerContainer, PickerItem } from './styled';
import { MonthPickerProps } from './types';

export const MonthPicker: FC<MonthPickerProps> = ({
  currentMonth,
  onMonthSelect,
}) => {
  const handleMonthSelect = useCallback(
    (index: number) => {
      onMonthSelect(index);
    },
    [onMonthSelect],
  );

  return (
    <PickerContainer>
      {SHORT_MONTHS.map((month, index) => (
        <PickerItem
          key={index}
          onClick={() => handleMonthSelect(index)}
          className={index === currentMonth ? 'selected' : ''}
        >
          {month}
        </PickerItem>
      ))}
    </PickerContainer>
  );
};
