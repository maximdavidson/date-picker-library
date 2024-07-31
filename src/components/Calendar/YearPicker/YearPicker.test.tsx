import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { YearPicker } from 'components/Calendar/YearPicker';

describe('YearPicker', () => {
  const mockOnYearSelect = jest.fn();

  test('renders years from currentYear - 3 to currentYear + 3 and highlights the current year', () => {
    const currentYear = 2024;
    render(
      <YearPicker currentYear={currentYear} onYearSelect={mockOnYearSelect} />,
    );

    const startYear = currentYear - 3;
    const endYear = currentYear + 3;
    const years = Array.from({ length: 11 }, (_, i) => startYear + i);

    years.forEach((year) => {
      expect(screen.getByText(year)).toBeInTheDocument();
      if (year === currentYear) {
        expect(screen.getByText(year)).toHaveClass('selected');
      } else {
        expect(screen.getByText(year)).not.toHaveClass('selected');
      }
    });
  });

  test('calls onYearSelect with the correct year when a year is clicked', () => {
    const currentYear = 2024;
    render(
      <YearPicker currentYear={currentYear} onYearSelect={mockOnYearSelect} />,
    );

    const yearToClick = 2026;
    fireEvent.click(screen.getByText(yearToClick));
    expect(mockOnYearSelect).toHaveBeenCalledWith(yearToClick);
  });
});
