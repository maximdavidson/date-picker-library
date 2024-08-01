import React, { FC } from 'react';
import { StyledButton } from './styled';

type ButtonProps = {
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Clear Range</StyledButton>;
};
