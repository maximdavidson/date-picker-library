export type DateRange = {
  start: Date | null;
  end: Date | null;
};

export type GridSliderProps = {
  isMondayFirst?: boolean;
  currentDate: Date;
  selectedRange: DateRange;
  onDateSelect: (date: Date) => void;
  isHolidayDate: (date: Date) => boolean;
  getHolidayName: (date: Date) => string | null;
  foundedDate: Date | null;
  showTodo: boolean;
  weekendColor: string;
  holidayColor: string;
};
