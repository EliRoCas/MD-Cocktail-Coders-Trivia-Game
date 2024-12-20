import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./styles/global.scss";
import { Provider } from "react-redux";
import store from "./services/store.js";

createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>

);
