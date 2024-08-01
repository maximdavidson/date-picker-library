import { formatInputDate } from 'utils/formatInputDate';

describe('formatInputDate', () => {
  it('should format date correctly when input is less than 2 digits', () => {
    expect(formatInputDate('1')).toBe('1');
  });

  it('should format date correctly when input is 2 digits', () => {
    expect(formatInputDate('12')).toBe('12');
  });

  it('should format date correctly when input is more than 2 digits but less than 5', () => {
    expect(formatInputDate('123')).toBe('12/3');
    expect(formatInputDate('1234')).toBe('12/34');
  });

  it('should format date correctly when input is 5 digits', () => {
    expect(formatInputDate('12345')).toBe('12/34/5');
  });

  it('should format date correctly when input is more than 5 digits', () => {
    expect(formatInputDate('123456')).toBe('12/34/56');
    expect(formatInputDate('1234567')).toBe('12/34/567');
  });

  it('should remove non-digit characters', () => {
    expect(formatInputDate('12a34b56')).toBe('12/34/56');
  });
});
