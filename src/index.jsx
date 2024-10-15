import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { darkTheme } from './constant/theme';

const element = document.getElementById('root')

const root = createRoot(element)

root.render(
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
</ThemeProvider>
)
