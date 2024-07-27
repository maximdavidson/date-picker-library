import React from 'react';
import { GlobalStyle } from '../src/globalStyles';
import { DateProvider } from 'providers/DateProviders';

export const WithGlobalStyles: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <>
    <GlobalStyle />
    <DateProvider>{children}</DateProvider>
  </>
);
