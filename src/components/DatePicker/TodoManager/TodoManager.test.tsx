import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoManager } from 'components/DatePicker/TodoManager';
import '@testing-library/jest-dom';

const mockOnClose = jest.fn();
const mockSetTodos = jest.fn();
const mockTodos = {};

describe('TodoManager', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <TodoManager
        pressedDate={new Date()}
        onClose={mockOnClose}
        todos={mockTodos}
        setTodos={mockSetTodos}
      />,
    );
    expect(screen.getByText(/Todos for/i)).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(
      <TodoManager
        pressedDate={new Date()}
        onClose={mockOnClose}
        todos={mockTodos}
        setTodos={mockSetTodos}
      />,
    );
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText('✎');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(mockSetTodos).toHaveBeenCalledWith(
      expect.objectContaining({
        [new Date().toDateString()]: ['New Todo'],
      }),
    );
  });

  it('removes a todo', () => {
    const todosWithItem = {
      [new Date().toDateString()]: ['New Todo'],
    };

    render(
      <TodoManager
        pressedDate={new Date()}
        onClose={mockOnClose}
        todos={todosWithItem}
        setTodos={mockSetTodos}
      />,
    );
    const removeButton = screen.getByText('☑');
    fireEvent.click(removeButton);

    expect(mockSetTodos).toHaveBeenCalledWith({});
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <TodoManager
        pressedDate={new Date()}
        onClose={mockOnClose}
        todos={mockTodos}
        setTodos={mockSetTodos}
      />,
    );
    const closeButton = screen.getByText('✖');

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
