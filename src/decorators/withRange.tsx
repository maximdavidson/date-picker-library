import React, { useState, FC, useCallback } from 'react';
import { CalendarProps } from 'components/Calendar/types';
import { Button } from 'components/DateRangePicker/CleanRangeButton';

export const withRange = (Component: FC<CalendarProps>) => {
  return (props: CalendarProps) => {
    const [range, setRange] = useState<{
      start: Date | null;
      end: Date | null;
    }>({ start: null, end: null });

    const startNewRange = (date: Date) => {
      setRange({ start: date, end: null });
    };

    const completeRange = (startDate: Date, endDate: Date) => {
      setRange({ start: startDate, end: endDate });
    };

    const handleDateSelect = (date: Date) => {
      if (!range.start || (range.start && range.end)) {
        startNewRange(date);
      } else {
        const isStartDateEarlier = date < range.start;
        completeRange(
          isStartDateEarlier ? date : range.start,
          isStartDateEarlier ? range.start : date,
        );
      }
    };

    const handleClearRange = useCallback(() => {
      setRange({ start: null, end: null });
    }, []);

    return (
      <div>
        <Component
          {...props}
          selectedRange={range}
          onDateSelect={handleDateSelect}
        />
        <Button onClick={handleClearRange} />
      </div>
    );
  };
};
