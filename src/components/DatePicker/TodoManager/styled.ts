import styled from 'styled-components';

export const TodoModal = styled.div`
  position: absolute;
  top: 100px;
  left: 9px;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  button {
    background-color: transparent;
    border: none;
    color: rgba(139, 244, 120, 1);
    cursor: pointer;
    font-size: 16px;
  }
`;

export const Add = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

export const Close = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;
