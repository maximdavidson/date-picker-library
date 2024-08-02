import React, { FC } from 'react';
import { Title, Month, Year } from './styled';
import { MONTHS } from 'constants/months';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { MonthTitleProps } from './types';

export const MonthTitle: FC<MonthTitleProps> = ({
  currentDate,
  onMonthTitleClick,
  onYearClick,
}) => {
  const monthName = MONTHS[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <Title>
        <Month onClick={onMonthTitleClick}>{monthName}</Month>
        <Year onClick={onYearClick}>{year}</Year>
      </Title>
    </ThemeProvider>
  );
};
