import { useContext } from 'react';
import { ThemeContext } from '@/themes/ThemeProvider';

export function useTheme() {
  return useContext(ThemeContext);
}
