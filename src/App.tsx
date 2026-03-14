import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AppContent />
  </BrowserRouter>
);

export default App;
