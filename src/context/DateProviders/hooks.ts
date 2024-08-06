import { useContext } from 'react';
import { DateContext } from './index'; // Импортируем контекст из файла провайдера
import { DateContextType } from './index'; // Импортируем тип контекста

export const useDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
