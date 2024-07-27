import React from 'react';
import { StyledButton } from './styled';

type ButtonProps = {
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Clear Range</StyledButton>;
};
