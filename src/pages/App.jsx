import '../styles/App.css';
import { Route, Routes } from 'react-router';
import Home from './Home.jsx';
import { ThemeProvider } from '../components/ui/theme-provider.jsx';
import { LanguageProvider } from '../components/ui/language-provider.jsx';
import '../locales/i18n.js';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />/
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
