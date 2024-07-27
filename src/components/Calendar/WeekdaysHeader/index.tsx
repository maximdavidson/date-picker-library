import React, { FC } from 'react';
import { WeekdayLabel } from './styled';

type WeekdayHeaderProps = {
  isMondayFirst?: boolean;
};

const getWeekdayLabels = (isMondayFirst: boolean) => {
  return isMondayFirst
    ? ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
    : ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
};

export const WeekdayHeader: FC<WeekdayHeaderProps> = ({
  isMondayFirst = false,
}) => {
  const weekdayLabels = getWeekdayLabels(isMondayFirst);

  return (
    <>
      {weekdayLabels.map((label, index) => (
        <WeekdayLabel
          key={`label-${index}`}
          isWeekend={label === 'SA' || label === 'SU'}
        >
          {label}
        </WeekdayLabel>
      ))}
    </>
  );
};
