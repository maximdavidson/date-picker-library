import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 250px;
  height: 251px;
  border-radius: 8px;
  border: 1px solid rgba(225, 225, 225, 1);
  background-color: rgba(255, 255, 255, 1);
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

export const Button = styled.button``;
