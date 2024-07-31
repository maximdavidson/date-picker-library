import { getHolidayName } from 'utils/getHolidayName';
import { HOLIDAY } from 'constants/holidays';

const transformedHolidays = HOLIDAY.map((holiday) => ({
  name: holiday.name,
  date: new Date(new Date().getFullYear(), holiday.month, holiday.day),
}));

describe('getHolidayName', () => {
  it('should return the correct holiday name for matching date', () => {
    const date = new Date(new Date().getFullYear(), 0, 1);
    const holidayName = getHolidayName(date, transformedHolidays);

    expect(holidayName).toBe("New Year's Day");
  });

  it('should return null for a date with no matching holiday', () => {
    const date = new Date(new Date().getFullYear(), 5, 1);
    const holidayName = getHolidayName(date, transformedHolidays);

    expect(holidayName).toBeNull();
  });

  it('should return null for a date that is not in the list of holidays', () => {
    const date = new Date(new Date().getFullYear() - 1, 11, 25);
    const holidayName = getHolidayName(date, transformedHolidays);

    expect(holidayName).toBeNull();
  });
});
