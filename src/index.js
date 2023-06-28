 import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
    domain="dev-yrr2q58t4yiofa5x.us.auth0.com"
    clientId="OtAz7sjF3GUk2v8yvBp4qF1pW6TP9K8K"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);