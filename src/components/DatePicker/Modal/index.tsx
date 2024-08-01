import React, { ChangeEvent, FC, FocusEvent, KeyboardEvent } from 'react';
import calendar from 'assets/Calendar.png';
import clear from 'assets/Clear.png';
import { ModalWrapper, Input, CalendarIcon, ClearIcon } from './styled';

interface ModalProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  placeholder: string;
  isDateValid: boolean;
}

export const Modal: FC<ModalProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onClear,
  placeholder,
  isDateValid,
}) => {
  return (
    <ModalWrapper>
      <CalendarIcon src={calendar} alt="calendar icon" />
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
  );
};
