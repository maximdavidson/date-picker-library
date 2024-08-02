import styled from 'styled-components';

export const PickerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
`;

export const PickerItem = styled.div`
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #d0d0d0;
  }
`;
