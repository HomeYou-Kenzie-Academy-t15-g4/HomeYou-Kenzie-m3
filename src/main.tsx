import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HousesProvider } from './providers/HousesContext';
import { UserProvider } from './providers/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <HousesProvider>
          <App />
        </HousesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
