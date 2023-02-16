import React from 'react';
import  { createRoot }from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = createRoot(document.getElementById("root-notifications"));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);



