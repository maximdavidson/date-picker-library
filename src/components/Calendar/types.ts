export type SelectedRange = {
  start: Date | null;
  end: Date | null;
};

export type CalendarProps = {
  isMondayFirst: boolean;
  isWeekendDate: (date: Date) => boolean;
  isHolidayDate: (date: Date) => boolean;
  selectedRange: SelectedRange;
  onDateSelect: (date: Date) => void;
  getHolidayName: (date: Date) => string | null;
  foundedDate: Date | null;
  showTodo?: boolean;
};
