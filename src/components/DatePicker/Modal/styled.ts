import styled from 'styled-components';

interface InputProps {
  isValid: boolean;
}

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 224px;
  height: 26px;
  padding: 8px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #dcdcdc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CalendarIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Input = styled.input<InputProps>`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ isValid }) =>
    isValid ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 0, 0, 0.6)'};
  width: 100%;
  cursor: pointer;
`;

export const ClearIcon = styled.img`
  margin-left: 8px;
  cursor: pointer;
`;
