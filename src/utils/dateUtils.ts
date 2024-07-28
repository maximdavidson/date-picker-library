export const isWeekend = (date: Date, isMondayFirst: boolean) => {
  const day = date.getDay();
  return isMondayFirst ? day === 6 || day === 0 : day === 0 || day === 6;
};

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isDateInRange = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  if (!range.start || !range.end) return false;
  return date >= range.start && date <= range.end;
};

export const isStartDate = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  return range.start ? date.getTime() === range.start.getTime() : false;
};

export const isEndDate = (
  date: Date,
  range: { start: Date | null; end: Date | null },
) => {
  return range.end ? date.getTime() === range.end.getTime() : false;
};
