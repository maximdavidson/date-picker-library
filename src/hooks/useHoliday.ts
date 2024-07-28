import { useState, useCallback, useEffect } from 'react';

type Holiday = {
  date: Date | null;
  name: string | null;
};

export const useHoliday = (
  isHolidayDate: (date: Date) => boolean,
  getHolidayName: (date: Date) => string | null,
) => {
  const [clickedHoliday, setClickedHoliday] = useState<Holiday>({
    date: null,
    name: null,
  });
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  const handleDayClick = useCallback(
    (date: Date) => {
      if (isHolidayDate && isHolidayDate(date) && getHolidayName) {
        const name = getHolidayName(date);
        setClickedHoliday((prev) => {
          if (prev.date?.getTime() === date.getTime()) {
            return { date: null, name: null };
          }
          return { date, name };
        });
        if (hideTimer) {
          clearTimeout(hideTimer);
        }
        const newTimer = setTimeout(() => {
          setClickedHoliday({ date: null, name: null });
        }, 1000);
        setHideTimer(newTimer);
      } else {
        setClickedHoliday({ date: null, name: null });
      }
    },
    [isHolidayDate, getHolidayName, hideTimer],
  );

  useEffect(() => {
    return () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [hideTimer]);

  return { clickedHoliday, handleDayClick };
};
