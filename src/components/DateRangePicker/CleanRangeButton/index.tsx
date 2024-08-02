import React, { FC } from 'react';
import { StyledButton } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

type ButtonProps = {
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton onClick={onClick}>Clear Range</StyledButton>
    </ThemeProvider>
  );
};
