import styled from 'styled-components';

export const CalendarContainer = styled.main`
  width: 255px;
  height: 281px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 100%;
  justify-content: center;
`;

export const ArrowButtonPrev = styled.img`
  cursor: pointer;
  padding-right: 44px;
  padding-top: 10px;
`;

export const ArrowButtonNext = styled.img`
  cursor: pointer;
  padding-left: 44px;
  padding-top: 10px;
`;
