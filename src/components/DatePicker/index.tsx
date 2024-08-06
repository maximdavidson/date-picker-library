import React, {
  useState,
  ChangeEvent,
  FC,
  KeyboardEvent,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { Calendar } from '../Calendar';
import { CalendarProps } from '../Calendar/types';
import { withHolidays } from 'decorators/withHolidays';
import { Modal } from './Modal';
import { formatInputDate } from 'utils/formatInputDate';
import { Container, Wrapper } from './styled';

type DatePickerProps = CalendarProps & {
  withHolidays?: boolean;
  weekendColor?: string;
  holidayColor?: string;
};

const CalendarWithHolidays = withHolidays(Calendar);

const isValidDate = (date: string) => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20[0-9]{2})$/;
  return regex.test(date);
};

export const DatePicker: FC<DatePickerProps> = ({
  withHolidays = true,
  weekendColor = 'rgba(255, 0, 0, 1)',
  holidayColor = 'rgba(255, 0, 0, 1)',
  ...props
}) => {
  const [date, setDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState('Choose Date');
  const [isDateValid, setIsDateValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = formatInputDate(event.target.value);
    setDate(value);
    setIsDateValid(isValidDate(value));
  };

  const handleInputFocus = () => {
    if (!date) {
      const today = new Date().toLocaleDateString('en-GB');
      setDate(today);
      setIsDateValid(true);
    }
    setIsCalendarVisible(true);
    setPlaceholder('dd/mm/yyyy');
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    if (!date || !isValidDate(date)) {
      setDate('');
      setPlaceholder('Choose Date');
      setIsDateValid(true);
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/'];
    if (
      !allowedKeys.includes(event.key) &&
      !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  const handleClear = () => {
    setDate('');
    setIsCalendarVisible(true);
    setPlaceholder('Choose Date');
    setIsDateValid(false);
  };

  const handleDateSelect = (selectedDate: Date) => {
    const formattedDate = selectedDate.toLocaleDateString('en-GB');
    setDate(formattedDate);
    setIsDateValid(true);
    setIsCalendarVisible(true);
  };

  const parsedDate = isValidDate(date)
    ? new Date(date.split('/').reverse().join('-'))
    : null;

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node) &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarVisible(false);
        if (!date || !isValidDate(date)) {
          setDate('');
          setPlaceholder('Choose Date');
          setIsDateValid(false);
        }
      }
    },
    [date],
  );

  const handleCalendarIconClick = () => {
    setIsCalendarVisible(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const CalendarComponent = withHolidays ? CalendarWithHolidays : Calendar;

  return (
    <Container ref={datePickerRef}>
      <Modal
        value={date}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        onClear={handleClear}
        onCalendarIconClick={handleCalendarIconClick}
        placeholder={isFocused ? placeholder : 'Choose Date'}
        isDateValid={isDateValid}
        isFocused={isFocused}
        isCalendarVisible={isCalendarVisible}
      />
      {isCalendarVisible && (
        <Wrapper ref={calendarRef}>
          <CalendarComponent
            {...props}
            foundedDate={parsedDate}
            showTodo={true}
            weekendColor={weekendColor}
            holidayColor={holidayColor}
            onDateSelect={handleDateSelect}
          />
        </Wrapper>
      )}
    </Container>
  );
};
