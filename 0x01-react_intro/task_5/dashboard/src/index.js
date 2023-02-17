import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

const rootNotifications = ReactDOM.createRoot(document.getElementById("root-notifications"));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);