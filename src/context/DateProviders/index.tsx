import React, { useState, createContext, ReactNode, Dispatch, SetStateAction, FC } from 'react';

// Определяем тип контекста
export interface DateContextType {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

// Создаем контекст
export const DateContext = createContext<DateContextType | null>(null);

export const DateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <DateContext.Provider value={{ currentDate, setCurrentDate }}>
      {children}
    </DateContext.Provider>
  );
};
