import { createContext } from 'react';
import { Theme } from '../types/theme';

const themeContext = createContext<Theme>({} as Theme);

export default themeContext;
