import React, { useState } from 'react';
import { CalendarProps } from 'components/Calendar';

export const withRange = (Component: React.FC<CalendarProps>) => {
  return (props: CalendarProps) => {
    const [range, setRange] = useState<{
      start: Date | null;
      end: Date | null;
    }>({ start: null, end: null });

    const handleDateSelect = (date: Date) => {
      if (!range.start || (range.start && range.end)) {
        setRange({ start: date, end: null });
      } else {
        if (date < range.start) {
          setRange({ start: date, end: range.start });
        } else {
          setRange({ ...range, end: date });
        }
      }
    };

    const handleClearRange = () => {
      setRange({ start: null, end: null });
    };

    return (
      <div>
        <Component
          {...props}
          selectedRange={range}
          onDateSelect={handleDateSelect}
        />
        <button onClick={handleClearRange}>Clear Range</button>
      </div>
    );
  };
};
