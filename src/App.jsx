import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <header className="navbar p-10">
        <div className="navbar-container p-10">
          <nav className="navbar-navigation">
            <NavLink to="/" end className="navbar-link">All</NavLink>
            <NavLink to="/fullstack" className="navbar-link">Full Stack Development</NavLink>
            <NavLink to="/datascience" className="navbar-link">Data Science</NavLink>
            <NavLink to="/cybersecurity" className="navbar-link">Cyber Security</NavLink>
            <NavLink to="/career" className="navbar-link">Career</NavLink>
          </nav>
        </div>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
