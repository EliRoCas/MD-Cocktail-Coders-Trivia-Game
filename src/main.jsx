import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App.jsx";
import "./styles/global.scss";
import { Provider } from "react-redux";
import store from "./services/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider >
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  </StrictMode>
);
