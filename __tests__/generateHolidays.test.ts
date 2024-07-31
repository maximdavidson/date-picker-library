import { generateHolidays } from 'utils/generateHolidays';
import { HOLIDAY } from 'constants/holidays';

describe('generateHolidays', () => {
  it('should generate holidays for the given year', () => {
    const year: number = 2024;
    const holidays = generateHolidays(year);

    expect(holidays).toHaveLength(HOLIDAY.length);

    holidays.forEach((holiday, index) => {
      expect(holiday.name).toBe(HOLIDAY[index].name);
      expect(holiday.date.getFullYear()).toBe(year);
      expect(holiday.date.getMonth()).toBe(HOLIDAY[index].month);
      expect(holiday.date.getDate()).toBe(HOLIDAY[index].day);
    });
  });
});
