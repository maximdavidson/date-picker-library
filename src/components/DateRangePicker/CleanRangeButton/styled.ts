import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 5px;
  width: 254px;
  height: 36px;
  padding: 10px 0;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(225, 225, 225, 1);
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  font-size: 12px;
  color: rgba(51, 51, 51, 1);

  &:hover {
    background-color: rgba(170, 170, 170, 1);
  }

  &:active {
    transform: translateY(2px);
  }
`;
