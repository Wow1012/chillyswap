import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes';
import GlobalCSS from './css/global.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalCSS />
    </BrowserRouter>
  );
}

export default App;
