import React, { ChangeEvent, FC } from 'react';
import calendar from 'assets/Calendar.png';
import clear from 'assets/Clear.png';
import { ModalWrapper, Input, CalendarIcon, ClearIcon } from './styled';

interface ModalProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onClear: () => void;
}

export const Modal: FC<ModalProps> = ({
  value,
  onChange,
  onClick,
  onClear,
}) => {
  return (
    <ModalWrapper onClick={onClick}>
      <CalendarIcon src={calendar} alt="calendar icon" />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Choose Date"
      />
      {value && <ClearIcon src={clear} alt="clear icon" onClick={onClear} />}
    </ModalWrapper>
  );
};
