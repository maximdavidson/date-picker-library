export const getPreviousMonthDays = (
  year: number,
  month: number,
  isMondayFirst: boolean,
) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const firstDayIndex = isMondayFirst
    ? firstDayOfMonth === 0
      ? 6
      : firstDayOfMonth - 1
    : firstDayOfMonth;
  const prevMonth = new Date(year, month - 1, 1);
  const daysInPrevMonth = new Array(firstDayIndex)
    .fill('')
    .map(
      (_, i) =>
        new Date(
          prevMonth.getFullYear(),
          prevMonth.getMonth(),
          prevMonth.getDate() - (firstDayIndex - i),
        ),
    );
  return daysInPrevMonth;
};
