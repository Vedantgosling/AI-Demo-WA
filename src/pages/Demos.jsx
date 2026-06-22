import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, MessageSquare, PenTool, Play, Loader2, CheckCircle2 } from 'lucide-react';

// The fake AI tools we offer
const tools = [
  {
    id: 'sql',
    name: 'Natural Language to SQL',
    icon: Database,
    placeholder: 'e.g., "Find all users who signed up last month and spent over $500"',
    fakeOutput: "SELECT user_id, name, email\nFROM users\nWHERE signup_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')\n  AND signup_date < DATE_TRUNC('month', CURRENT_DATE)\n  AND total_spent > 500;"
  },
  {
    id: 'sentiment',
    name: 'Sentiment Analyzer',
    icon: MessageSquare,
    placeholder: 'Paste a customer review here to analyze sentiment...',
    fakeOutput: "{\n  \"sentiment\": \"Highly Positive\",\n  \"confidence_score\": 0.98,\n  \"key_phrases\": [\"exceptional service\", \"fast delivery\"]\n}"
  },
  {
    id: 'copy',
    name: 'Marketing Copywriter',
    icon: PenTool,
    placeholder: 'What product are we launching today?',
    fakeOutput: "Supercharge your workflow. \n\nStop wasting hours on manual data entry. Our intelligent agents seamlessly integrate into your existing stack to automate the boring stuff, giving your team their time back. \n\nReady to scale? Let's build the future."
  }
];

export default function Demos() {
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState(null);

  // Reset state when switching tools
  const handleToolSwitch = (tool) => {
    setActiveTool(tool);
    setInput('');
    setOutput(null);
  };

  // Simulate an API call
  const handleGenerate = () => {
    if (!input) return;
    setIsGenerating(true);
    setOutput(null);

    // Fake a 1.5-second network request
    setTimeout(() => {
      setIsGenerating(false);
      setOutput(activeTool.fakeOutput);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}
    >
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
          Interactive Playground
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Test our specialized models in real-time. Select a capability from the sidebar.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        
        {/* Sidebar Navigation */}
        <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {tools.map((tool) => {
            const isActive = activeTool.id === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => handleToolSwitch(tool)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: isActive ? '#eff6ff' : 'transparent',
                  border: isActive ? '1px solid #bfdbfe' : '1px solid transparent',
                  borderRadius: '12px',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <tool.icon size={20} />
                {tool.name}
              </button>
            );
          })}
        </div>

        {/* Main Playground Area */}
        <div className="crisp-card" style={{ flex: '3 1 600px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Input Area */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
              Input
            </label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={activeTool.placeholder}
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: '#f8fafc',
                color: 'var(--text-main)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          {/* Action Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !input}
              style={{
                background: isGenerating || !input ? '#cbd5e1' : 'var(--accent-primary)',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: isGenerating || !input ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s ease'
              }}
            >
              {isGenerating ? (
                <><Loader2 size={18} className="animate-spin" /> Processing...</>
              ) : (
                <><Play size={18} fill="currentColor" /> Run Model</>
              )}
            </button>
          </div>

          {/* Output Area */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
              Output {output && <CheckCircle2 size={16} color="green" />}
            </label>
            <div 
              className="font-mono"
              style={{
                width: '100%',
                minHeight: '160px',
                padding: '24px',
                borderRadius: '8px',
                background: '#0f172a', /* Keep output dark like a real code terminal */
                color: '#e2e8f0',
                fontSize: '0.9rem',
                whiteSpace: 'pre-wrap',
                overflowX: 'auto',
                border: '1px solid var(--border-color)'
              }}
            >
              {output ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  {output}
                </motion.div>
              ) : (
                <span style={{ color: '#475569' }}>// Awaiting input sequence...</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}