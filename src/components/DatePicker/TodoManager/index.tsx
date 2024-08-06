import React, {
  ChangeEvent,
  FC,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from 'react';
import { TodoModal, TodoItem, Add, Close } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

type TodoManagerProps = {
  pressedDate: Date | null;
  onClose: () => void;
  todos: { [key: string]: string[] };
  setTodos: Dispatch<SetStateAction<{ [key: string]: string[] }>>;
};

export const TodoManager: FC<TodoManagerProps> = ({
  pressedDate,
  onClose,
  todos,
  setTodos,
}) => {
  const [newTodo, setNewTodo] = React.useState('');
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!pressedDate) return null;

  return (
    <ThemeProvider theme={theme}>
      <TodoModal ref={modalRef}>
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
    </ThemeProvider>
  );
};
