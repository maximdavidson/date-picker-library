import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from 'components/DatePicker/Modal';

const mockOnChange = jest.fn();
const mockOnFocus = jest.fn();
const mockOnBlur = jest.fn();
const mockOnKeyDown = jest.fn();
const mockOnClear = jest.fn();

describe('Modal', () => {
  test('renders the modal with correct elements and placeholder', () => {
    render(
      <Modal
        value=""
        onChange={mockOnChange}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
        onKeyDown={mockOnKeyDown}
        onClear={mockOnClear}
        placeholder="Enter date"
        isDateValid={false}
      />,
    );

    const input = screen.getByPlaceholderText('Enter date');
    expect(input).toBeInTheDocument();

    const calendarIcon = screen.getByAltText('calendar icon');
    expect(calendarIcon).toBeInTheDocument();

    const clearIcon = screen.queryByAltText('clear icon');
    expect(clearIcon).toBeNull();
  });

  test('shows clear icon when input has value and calls onClear when clicked', () => {
    render(
      <Modal
        value="31/12/2024"
        onChange={mockOnChange}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
        onKeyDown={mockOnKeyDown}
        onClear={mockOnClear}
        placeholder="Enter date"
        isDateValid={true}
      />,
    );

    const clearIcon = screen.getByAltText('clear icon');
    expect(clearIcon).toBeInTheDocument();

    fireEvent.click(clearIcon);
    expect(mockOnClear).toHaveBeenCalled();
  });

  test('calls onChange, onFocus, onBlur, and onKeyDown with correct parameters', () => {
    const value = '31/12/2024';
    render(
      <Modal
        value={value}
        onChange={mockOnChange}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
        onKeyDown={mockOnKeyDown}
        onClear={mockOnClear}
        placeholder="Enter date"
        isDateValid={true}
      />,
    );

    const input = screen.getByPlaceholderText('Enter date');

    fireEvent.change(input, { target: { value } });
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Проверяем, что вызвана функция onChange с событием

    fireEvent.focus(input);
    expect(mockOnFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(mockOnBlur).toHaveBeenCalled();

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockOnKeyDown).toHaveBeenCalledWith(expect.any(Object)); // Проверяем, что вызвана функция onKeyDown с событием
  });
});
