import '../styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import { ThemeProvider } from '../components/ui/theme-provider.jsx';
import { LanguageProvider } from '../components/ui/language-provider.jsx';
import '../locales/i18n.js';
import Login from './Login.jsx';
import { SnackbarProvider } from 'notistack';
import Signup from '@/pages/Signup.jsx';
import Vehicles from '@/pages/Vehicles.jsx';
import VehicleDetail from '@/pages/VehicleDetail.jsx';
import Campaigns from '@/pages/Campaigns.jsx';
import ScrollToTop from '@/components/ui/scrolToTop.jsx';
import React from 'react';
import Faq from '@/pages/FAQ.jsx';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <LanguageProvider>
        <SnackbarProvider maxSnack={4}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/vehicles/:brandModel" element={<VehicleDetail />} />
            <Route path="/frequently-asked-questions" element={<Faq />} />
          </Routes>
        </SnackbarProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
