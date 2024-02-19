import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Router';
import { ThemeProvider } from '@emotion/react';
import { baseTheme } from './assets/global/Theme-variable';
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
        <RouterProvider router={routes}>
        </RouterProvider>
        </ThemeProvider>
  </React.StrictMode>,
);