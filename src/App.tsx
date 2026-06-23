import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CouncilPage from './pages/CouncilPage';
import EventsPage from './pages/EventsPage';
import MotionsPage from './pages/MotionsPage';
import RuleBookPage from './pages/RuleBookPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/council" element={<CouncilPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/motions" element={<MotionsPage />} />
          <Route path="/rulebook" element={<RuleBookPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;