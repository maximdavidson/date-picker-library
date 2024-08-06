import { NON_DIGIT_REGEX } from 'constants/digitRegex';

export const formatInputDate = (value: string): string => {
  const digits = value.replace(NON_DIGIT_REGEX, '');
  const chars = digits.split('');

  if (chars.length > 2) {
    chars.splice(2, 0, '/');
  }
  if (chars.length > 5) {
    chars.splice(5, 0, '/');
  }

  return chars.join('');
};
