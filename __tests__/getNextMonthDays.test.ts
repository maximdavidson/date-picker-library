import { getNextMonthDays } from 'utils/getNextMonthDays';

describe('getNextMonthDays', () => {
  it('should return correct dates for the next month when the current month ends in the middle of the week', () => {
    const year: number = 2024;
    const month: number = 0;
    const daysInMonth = [
      new Date(year, month, 1),
      new Date(year, month, 2),
      new Date(year, month, 3),
      new Date(year, month, 4),
      new Date(year, month, 5),
      new Date(year, month, 6),
      new Date(year, month, 7),
      new Date(year, month, 8),
      new Date(year, month, 9),
      new Date(year, month, 10),
      new Date(year, month, 11),
      new Date(year, month, 12),
      new Date(year, month, 13),
      new Date(year, month, 14),
      new Date(year, month, 15),
      new Date(year, month, 16),
      new Date(year, month, 17),
      new Date(year, month, 18),
      new Date(year, month, 19),
      new Date(year, month, 20),
      new Date(year, month, 21),
      new Date(year, month, 22),
      new Date(year, month, 23),
      new Date(year, month, 24),
      new Date(year, month, 25),
      new Date(year, month, 26),
      new Date(year, month, 27),
      new Date(year, month, 28),
      new Date(year, month, 29),
      new Date(year, month, 30),
      new Date(year, month, 31),
    ];
    const isMondayFirst: boolean = false;
    const nextMonthDays = getNextMonthDays(
      year,
      month,
      daysInMonth,
      isMondayFirst,
    );

    expect(nextMonthDays).toHaveLength(3);
    expect(nextMonthDays[0].getDate()).toBe(1);
    expect(nextMonthDays[1].getDate()).toBe(2);
    expect(nextMonthDays[2].getDate()).toBe(3);
    expect(nextMonthDays[0].getMonth()).toBe(1);
    expect(nextMonthDays[1].getMonth()).toBe(1);
    expect(nextMonthDays[2].getMonth()).toBe(1);
  });
});
