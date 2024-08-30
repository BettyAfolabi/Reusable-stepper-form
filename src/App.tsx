//import { useState } from 'react'
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MultiStep from "./components/MultiStep";
import { Box, IconButton } from "@mui/material";
import { LightMode, ModeNight } from '@mui/icons-material';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#e0d8d8' : '#121212',
      },
      text: {
        primary: mode === 'light' ? '#242424' : '#ffffff',
      },
    },
    typography: {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
  }), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box display="flex" justifyContent="flex-end" p={1}>
          <IconButton onClick={toggleColorMode} color="inherit"  sx={{
          border: '1px solid',
          borderColor: mode === 'light' ? '#5e35b1' : '#673ab7',
          borderRadius: '8px',
        }}>
          {mode === 'light' ? <ModeNight /> : <LightMode />}
          </IconButton>
        </Box>
        <MultiStep />
      </Box>
    </ThemeProvider>
  );
}

export default App;

