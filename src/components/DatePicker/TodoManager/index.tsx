import React, { ChangeEvent, FC } from 'react';
import { TodoModal, TodoItem, Add, Close } from './styled';
import useLocalStorage from 'hooks/useLocalStorage';

type TodoManagerProps = {
  pressedDate: Date | null;
  onClose: () => void;
};

export const TodoManager: FC<TodoManagerProps> = ({ pressedDate, onClose }) => {
  const [todos, setTodos] = useLocalStorage<{ [key: string]: string[] }>(
    'todos',
    {},
  );
  const [newTodo, setNewTodo] = React.useState('');

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
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (dateKey: string, index: number) => {
    const updatedTodos = { ...todos };
    updatedTodos[dateKey].splice(index, 1);
    if (updatedTodos[dateKey].length === 0) {
      delete updatedTodos[dateKey];
    }
    setTodos(updatedTodos);
  };

  if (!pressedDate) return null;

  return (
    <TodoModal>
      <h4>Todos for {pressedDate.toDateString()}</h4>
      <input
        type="text"
        value={newTodo}
        onChange={handleTodoChange}
        placeholder="Add a new todo"
        maxLength={20}
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
