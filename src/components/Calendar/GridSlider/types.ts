export type SelectedRange = {
  start: Date | null;
  end: Date | null;
};

export type GridSliderProps = {
  isMondayFirst?: boolean;
  currentDate: Date;
  selectedRange: SelectedRange;
  onDateSelect: (date: Date) => void;
  isHolidayDate: boolean;
  getHolidayName: (date: Date) => string | null;
  foundedDate: Date | null;
  showTodo: boolean;
};
