import React from 'react';
import { WeekdaysHeaderContainer } from '../styled';

type WeekdaysHeaderProps = {
  isMondayFirst?: boolean;
};

const WeekdaysHeader: React.FC<WeekdaysHeaderProps> = ({ isMondayFirst }) => {
  const weekdays = isMondayFirst
    ? ['MO', 'TU', 'WE', 'TH', 'FR', 'ST', 'SU']
    : ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'ST'];

  return (
    <WeekdaysHeaderContainer>
      {weekdays.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </WeekdaysHeaderContainer>
  );
};

export { WeekdaysHeader };
