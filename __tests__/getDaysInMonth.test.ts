import { getDaysInMonth } from 'utils/getDaysInMonth';

describe('getDaysInMonth', () => {
  it('should return all days for a month with 31 days', () => {
    const year: number = 2024;
    const month: number = 0;

    const days = getDaysInMonth(year, month);

    expect(days).toHaveLength(31);

    days.forEach((date, index) => {
      expect(date.getFullYear()).toBe(year);
      expect(date.getMonth()).toBe(month);
      expect(date.getDate()).toBe(index + 1);
    });
  });

  it('should return only valid days for February in a leap year', () => {
    const year: number = 2024;
    const month: number = 1;

    const days = getDaysInMonth(year, month);

    expect(days).toHaveLength(29);

    days.forEach((date, index) => {
      expect(date.getFullYear()).toBe(year);
      expect(date.getMonth()).toBe(month);
      expect(date.getDate()).toBe(index + 1);
    });
  });

  it('should return only valid days for February in a non-leap year', () => {
    const year: number = 2023;
    const month: number = 1;

    const days = getDaysInMonth(year, month);

    expect(days).toHaveLength(28);

    days.forEach((date, index) => {
      expect(date.getFullYear()).toBe(year);
      expect(date.getMonth()).toBe(month);
      expect(date.getDate()).toBe(index + 1);
    });
  });

  it('should return an empty array for invalid month', () => {
    const year: number = 2024;
    const month: number = 12;

    const days = getDaysInMonth(year, month);

    expect(days).toHaveLength(0);
  });
});
