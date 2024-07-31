import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoManager } from 'components/DatePicker/TodoManager';
import '@testing-library/jest-dom';

const mockOnClose = jest.fn();

describe('TodoManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders without crashing', () => {
    render(<TodoManager pressedDate={new Date()} onClose={mockOnClose} />);
    expect(screen.getByText(/Todos for/i)).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoManager pressedDate={new Date()} onClose={mockOnClose} />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('✎');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('removes a todo', () => {
    render(<TodoManager pressedDate={new Date()} onClose={mockOnClose} />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('✎');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText('☑');
    fireEvent.click(removeButton);

    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<TodoManager pressedDate={new Date()} onClose={mockOnClose} />);
    const closeButton = screen.getByText('✖');

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
