import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement?.firstElementChild) {
  hydrateRoot(rootElement, <App />);
} else if (rootElement) {
  createRoot(rootElement).render(<App />);
}
