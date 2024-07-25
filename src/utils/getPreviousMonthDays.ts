export const getPreviousMonthDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const prevMonth = new Date(year, month - 1, 1);
  const daysInPrevMonth = new Array(firstDayOfMonth)
    .fill('')
    .map(
      (_, i) =>
        new Date(
          prevMonth.getFullYear(),
          prevMonth.getMonth(),
          prevMonth.getDate() - (firstDayOfMonth - i),
        ),
    );
  return daysInPrevMonth;
};
