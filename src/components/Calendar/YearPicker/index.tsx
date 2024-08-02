import React, { FC } from 'react';
import { PickerContainer, PickerItem } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
