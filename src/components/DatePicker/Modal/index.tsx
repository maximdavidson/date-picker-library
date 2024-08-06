import React, { ChangeEvent, FC, FocusEvent, KeyboardEvent } from 'react';
import calendar from 'assets/Calendar.png';
import clear from 'assets/Clear.png';
import { ModalWrapper, Input, CalendarIcon, ClearIcon } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

interface ModalProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onCalendarIconClick: () => void;
  placeholder: string;
  isDateValid: boolean;
  isFocused: boolean;
  isCalendarVisible: boolean;
}

export const Modal: FC<ModalProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onClear,
  onCalendarIconClick,
  placeholder,
  isDateValid,
  isFocused,
  isCalendarVisible,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalWrapper isFocused={isFocused} isDateValid={isDateValid}>
        <CalendarIcon
          src={calendar}
          alt="calendar icon"
          onClick={onCalendarIconClick}
          isCalendarVisible={isCalendarVisible}
          isDateValid={isDateValid}
        />
        <Input
          type="text"
          value={value}
          maxLength={10}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          isValid={isDateValid}
        />
        {value && <ClearIcon src={clear} alt="clear icon" onClick={onClear} />}
      </ModalWrapper>
    </ThemeProvider>
  );
};
