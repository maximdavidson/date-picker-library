export const getHolidayName = (
  date: Date,
  holidays: { name: string; date: Date }[],
) => {
  const holiday = holidays.find(
    (holiday) =>
      holiday.date.getDate() === date.getDate() &&
      holiday.date.getMonth() === date.getMonth() &&
      holiday.date.getFullYear() === date.getFullYear(),
  );
  return holiday ? holiday.name : null;
};
