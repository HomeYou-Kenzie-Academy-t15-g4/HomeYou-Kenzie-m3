import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HousesProvider } from './providers/HousesContext';
import { ModalsProvider } from './providers/ModalsContext';
import { UserProvider } from './providers/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <HousesProvider>
            <ModalsProvider>
              <App />
            </ModalsProvider>
          </HousesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
