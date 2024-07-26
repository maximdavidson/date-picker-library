import styled from 'styled-components';

export const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-top: 10px;
  display: flex;
  gap: 8px;
`;

export const Month = styled.div`
  cursor: pointer;
  &:hover {
    color: rgba(170, 170, 170, 1);
  }

  &:active {
    position: relative;
  }
`;
export const Year = styled.div`
  cursor: pointer;

  &:hover {
    color: rgba(170, 170, 170, 1);
  }

  &:active {
    position: relative;
  }
`;
