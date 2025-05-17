import '../styles/App.css';
import { Route, Routes } from 'react-router';
import Home from './Home.jsx';
import { ThemeProvider } from '../components/ui/theme-provider.jsx';
import { LanguageProvider } from '../components/ui/language-provider.jsx';
import '../locales/i18n.js';
import Login from './Login.jsx';
import { SnackbarProvider } from 'notistack';
import Signup from '@/pages/Signup.jsx';
import Vehicles from '@/pages/Vehicles.jsx';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <LanguageProvider>
        <SnackbarProvider maxSnack={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/vehicles" element={<Vehicles />}></Route>
          </Routes>
        </SnackbarProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
