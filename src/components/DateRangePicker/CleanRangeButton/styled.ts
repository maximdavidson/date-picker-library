import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 5px;
  width: 254px;
  height: 36px;
  padding: 10px 0;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(225, 225, 225, 1);
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: rgba(51, 51, 51, 1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &:active {
    transform: translateY(2px);
  }
`;
