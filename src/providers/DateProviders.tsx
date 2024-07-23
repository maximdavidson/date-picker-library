import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface Range {
  rangeStart?: Date;
  rangeEnd?: Date;
}

interface DateContextType {
  range: Range;
  setRange: Dispatch<SetStateAction<Range>>;
  clearRange: () => void;
}

const DateContext = createContext<DateContextType | null>(null);

const DateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [range, setRange] = useState<Range>({});

  const clearRange = () => setRange({});

  return (
    <DateContext.Provider value={{ range, setRange, clearRange }}>
      {children}
    </DateContext.Provider>
  );
};

const useDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};

export { DateProvider, useDate };
