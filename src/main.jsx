import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './pages/App.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
