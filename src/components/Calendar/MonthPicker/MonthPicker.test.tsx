import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MonthPicker } from 'components/Calendar/MonthPicker';
import { SHORT_MONTHS } from 'constants/shortMonth';

describe('MonthPicker', () => {
  const mockOnMonthSelect = jest.fn();

  test('renders all months and highlights the current month', () => {
    const currentMonth = 3;
    render(
      <MonthPicker
        currentMonth={currentMonth}
        onMonthSelect={mockOnMonthSelect}
      />,
    );

    SHORT_MONTHS.forEach((month, index) => {
      expect(screen.getByText(month)).toBeInTheDocument();
      if (index === currentMonth) {
        expect(screen.getByText(month)).toHaveClass('selected');
      } else {
        expect(screen.getByText(month)).not.toHaveClass('selected');
      }
    });
  });

  test('calls onMonthSelect with the correct month index when a month is clicked', () => {
    const currentMonth = 2;
    render(
      <MonthPicker
        currentMonth={currentMonth}
        onMonthSelect={mockOnMonthSelect}
      />,
    );

    const monthToClick = 5;
    fireEvent.click(screen.getByText(SHORT_MONTHS[monthToClick]));
    expect(mockOnMonthSelect).toHaveBeenCalledWith(monthToClick);
  });
});
