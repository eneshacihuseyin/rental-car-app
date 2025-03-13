import '../styles/App.css';
import { Route, Routes } from 'react-router';
import Home from './Home.jsx';
import { ThemeProvider } from '../components/theme-provider.jsx';
import { LanguageProvider } from '../components/language-provider.jsx';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />/
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
