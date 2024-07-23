import React from 'react';

type DayOfWeekGridProps = {
  isHolidayDate?: (date: Date) => boolean;
  isMondayFirst?: boolean;
  isTodosEnabled?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  isWithRange?: boolean;
  maxDate?: Date;
  minDate?: Date;
  type?: string;
};

const DayOfWeekGrid: React.FC<DayOfWeekGridProps> = ({
  isHolidayDate,
  isMondayFirst,
  isTodosEnabled,
  isWeekendDate,
  isWithRange,
  maxDate,
  minDate,
  type,
}) => {
  return null;
};

export { DayOfWeekGrid };
