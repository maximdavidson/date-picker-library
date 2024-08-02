import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-top: 10px;
  display: flex;
  gap: 8px;
`;

export const Month = styled.div`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:active {
    position: relative;
  }
`;
export const Year = styled.div`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:active {
    position: relative;
  }
`;
