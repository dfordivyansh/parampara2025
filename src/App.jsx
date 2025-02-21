import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TechnicalEvents from './components/TechnicalEvents';
import CulturalEvents from './components/CulturalEvents';
import SportsEvents from './components/SportsEvents';
import ContactUs from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technical" element={<TechnicalEvents />} />
        <Route path="/cultural" element={<CulturalEvents />} />
        <Route path="/sports" element={<SportsEvents />} />
        <Route path="/contact" element={<ContactUs/>} />

      </Routes>
    </Router>
  );
};

export default App;