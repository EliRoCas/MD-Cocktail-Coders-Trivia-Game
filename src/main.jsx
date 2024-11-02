import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App.jsx";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider >
      <App />
    </NextUIProvider>
  </StrictMode>
);
