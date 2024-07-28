export const getNextMonthDays = (
  year: number,
  month: number,
  daysInMonth: Date[],
  isMondayFirst: boolean,
) => {
  const lastDayOfMonth = daysInMonth[daysInMonth.length - 1].getDay();
  const totalDaysInWeek = 7;
  const daysToShow = isMondayFirst
    ? totalDaysInWeek - lastDayOfMonth
    : totalDaysInWeek - (lastDayOfMonth + 1);
  const nextMonth = new Date(year, month + 1, 1);
  const daysInNextMonth = new Array(daysToShow)
    .fill('')
    .map(
      (_, i) => new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i + 1),
    );
  return daysInNextMonth;
};
