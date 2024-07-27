import React, { FC } from 'react';
import { PickerContainer, PickerItem } from './styled';

type YearPickerProps = {
  currentYear: number;
  onYearSelect: (year: number) => void;
};

export const YearPicker: FC<YearPickerProps> = ({
  currentYear,
  onYearSelect,
}) => {
  const startYear = currentYear - 3;
  const endYear = currentYear + 3;
  const years = Array.from({ length: 11 }, (_, i) => startYear + i);

  return (
    <PickerContainer>
      {years.map((year) => (
        <PickerItem
          key={year}
          onClick={() => onYearSelect(year)}
          className={year === currentYear ? 'selected' : ''}
        >
          {year}
        </PickerItem>
      ))}
    </PickerContainer>
  );
};
