import React, { useState, ChangeEvent, FC } from 'react';
import { TodoModal, TodoItem, Add, Close } from './styled';

type TodoManagerProps = {
  pressedDate: Date | null;
  onClose: () => void;
};

export const TodoManager: FC<TodoManagerProps> = ({ pressedDate, onClose }) => {
  const [todos, setTodos] = useState<{ [key: string]: string[] }>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : {};
  });

  const [newTodo, setNewTodo] = useState('');

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (pressedDate && newTodo) {
      const dateKey = pressedDate.toDateString();
      const updatedTodos = {
        ...todos,
        [dateKey]: [...(todos[dateKey] || []), newTodo],
      };
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (dateKey: string, index: number) => {
    const updatedTodos = {
      ...todos,
    };
    updatedTodos[dateKey].splice(index, 1);
    if (updatedTodos[dateKey].length === 0) {
      delete updatedTodos[dateKey];
    }
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  if (!pressedDate) return null;

  return (
    <TodoModal>
      <h3>Todos for {pressedDate.toDateString()}</h3>
      <input
        type="text"
        value={newTodo}
        onChange={handleTodoChange}
        placeholder="Add a new todo"
      />
      <Add onClick={handleAddTodo}>&#9998;</Add>
      <Close onClick={onClose}>&#10006;</Close>
      <ul>
        {todos[pressedDate.toDateString()]?.map((todo, index) => (
          <TodoItem key={index}>
            {todo}
            <button
              onClick={() =>
                handleRemoveTodo(pressedDate.toDateString(), index)
              }
            >
              &#9745;
            </button>
          </TodoItem>
        ))}
      </ul>
    </TodoModal>
  );
};
