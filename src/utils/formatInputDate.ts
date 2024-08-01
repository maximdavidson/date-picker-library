export const formatInputDate = (value: string) => {
  const digits = value.replace(/\D/g, '');
  const chars = digits.split('');

  if (chars.length > 2) {
    chars.splice(2, 0, '/');
  }
  if (chars.length > 5) {
    chars.splice(5, 0, '/');
  }

  return chars.join('');
};
