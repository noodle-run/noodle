import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useDarkMode } from 'usehooks-ts';
import { globalStyles } from '../globalStyles';
import { darkTheme } from '../stitches.config';

export type StitchesContextType = {
  readonly toggleTheme: () => void;
};

export const StitchesContext = createContext<StitchesContextType>({
  toggleTheme: () => {},
});

type StitchesProviderProps = {
  readonly children: ReactNode;
};

export const StitchesProvider = ({ children }: StitchesProviderProps) => {
  globalStyles();

  const { isDarkMode, toggle } = useDarkMode();

  const value = useMemo(
    () => ({
      toggleTheme: toggle,
    }),
    [toggle],
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.body.classList.add(darkTheme);
      } else {
        document.body.classList.remove(darkTheme);
      }
    }
  }, [isDarkMode]);

  return (
    <StitchesContext.Provider value={value}>
      {children}
    </StitchesContext.Provider>
  );
};

export const useToggleTheme = () => useContext(StitchesContext);
