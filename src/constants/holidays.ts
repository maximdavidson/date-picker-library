type Holiday = {
  name: string;
  month: number;
  day: number;
};

export const HOLIDAY: Holiday[] = [
  { name: "New Year's Day", month: 0, day: 1 },
  { name: 'Orthodox Christmas Day', month: 0, day: 7 },
  { name: 'Defender of the Fatherland Day', month: 1, day: 23 },
  { name: "International Women's Day", month: 2, day: 8 },
  { name: 'International Labor Day', month: 4, day: 1 },
  { name: 'Commemoration Day', month: 4, day: 3 },
  { name: 'Victory Day', month: 4, day: 9 },
  { name: 'June Solstice', month: 5, day: 21 },
  { name: 'Independence Day', month: 6, day: 3 },
  { name: "Mother's Day", month: 9, day: 14 },
  { name: 'October Revolution Day', month: 10, day: 7 },
  { name: 'Christmas Day', month: 11, day: 25 },
  { name: "New Year's Eve", month: 11, day: 31 },
];
