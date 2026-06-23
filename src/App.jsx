import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, LayoutDashboard, Binary, Send } from 'lucide-react';
import Home from './pages/Home';
import Demos from './pages/Demos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ 
        backgroundColor: '#030305', 
        minHeight: '100vh', 
        color: '#e2e8f0',
        fontFamily: "'Space Grotesk', sans-serif"
      }}>
        {/* Sticky Glassmorphic Header */}
        <nav style={{ 
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(15, 15, 20, 0.7)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px 40px', 
          display: 'flex', 
          justifyContent: 'between',
          alignItems: 'center',
          gap: '20px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield style={{ color: '#00f3ff' }} size={22} />
            <Link to="/" style={{ 
              fontWeight: '700', 
              textDecoration: 'none', 
              color: '#fff',
              letterSpacing: '0.05em'
            }}>
              AETHER.AI
            </Link>
          </div>
          
          <div style={{ display: 'flex', gap: '32px', marginLeft: 'auto', alignItems: 'center' }}>
            <Link to="/" style={{ 
              color: '#94a3b8', 
              textDecoration: 'none', 
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <LayoutDashboard size={16} /> Home
            </Link>
            <Link to="/demos" style={{ 
              color: '#94a3b8', 
              textDecoration: 'none', 
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Binary size={16} /> Compute Sandbox
            </Link>
            <Link to="/contact" style={{ 
              background: 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)',
              color: '#030305',
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Send size={14} /> Initialize Node
            </Link>
          </div>
        </nav>

        // src/App.jsx
<div style={{ display: 'flex', gap: '32px', marginLeft: 'auto', alignItems: 'center' }}>
  {/* Existing links... */}

  {/* FAKE ERROR: External target="_blank" link missing rel="noopener noreferrer" or rel="nofollow" */}
  <a href="https://github.com/vitejs/vite" target="_blank" style={{ color: '#64748b', textDecoration: 'none' }}>
    External Docs API
  </a>
</div>

        {/* Dynamic Workspace Container */}
        <main style={{ padding: '40px 20px', minHeight: 'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demos" element={<TemplateWrapper><Demos /></TemplateWrapper>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Visual layout correction wrapper for framer motion pages
function TemplateWrapper({ children }) {
  return <div style={{ width: '100%' }}>{children}</div>;
}

export default App;