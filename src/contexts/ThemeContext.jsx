import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import easy_q3 from '@/colors/easy/q3.js'

import junior_q1 from '@/colors/junior/q1.js'
import junior_q2 from '@/colors/junior/q2.js'

const propTypes = {
  children: PropTypes.node
}
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggleTheme = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const theme = createTheme({
    spacing: factor => `${factor * 4}px`,

    palette: {
      mode: mode,
      easy: {
        q3: mode === 'light' ? easy_q3.light : easy_q3.dark
      },
      junior: {
        q1: mode === 'light' ? junior_q1.light : junior_q1.dark,
        q2: mode === 'light' ? junior_q2.light : junior_q2.dark
      }
    }
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = propTypes

export default CustomThemeProvider
