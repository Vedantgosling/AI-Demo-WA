import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Demos from './pages/Demos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navigation Header */}
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none' }}>AI Services</Link>
          <Link to="/">Home</Link>
          <Link to="/demos">AI Demos</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Dynamic Page Workspace */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;