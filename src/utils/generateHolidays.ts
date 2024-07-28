import { HOLIDAY } from 'constants/holidays';

export const generateHolidays = (year: number) => {
  return HOLIDAY.map((holiday) => ({
    name: holiday.name,
    date: new Date(year, holiday.month, holiday.day),
  }));
};
