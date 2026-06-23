import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, MessageSquare, PenTool, Play, Loader2, CheckCircle2 } from 'lucide-react';

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

  const handleToolSwitch = (tool) => {
    setActiveTool(tool);
    setInput('');
    setOutput(null);
  };

  const handleGenerate = () => {
    if (!input) return;
    setIsGenerating(true);
    setOutput(null);

    setTimeout(() => {
      setIsGenerating(false);
      setOutput(activeTool.fakeOutput);
    }, 1200);
  };

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
          Interactive Playground
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Test our specialized models in real-time. Select a capability from the sidebar.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {/* Sidebar */}
        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                  background: isActive ? 'rgba(0, 243, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive ? '#00f3ff' : 'rgba(255, 255, 255, 0.06)'}`,
                  borderRadius: '12px',
                  color: isActive ? '#00f3ff' : '#94a3b8',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <tool.icon size={18} />
                {tool.name}
              </button>
            );
          })}
        </div>

        {/* Playground Card Component */}
        <div style={{ 
          flex: '3 1 600px', 
          background: 'rgba(15, 15, 20, 0.6)', 
          border: '1px solid rgba(255, 255, 255, 0.06)', 
          borderRadius: '16px', 
          padding: '32px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px' 
        }}>
          {/* Input Interface */}
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>
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
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#0a0a0f',
                color: '#fff',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Trigger Mechanism */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !input}
              style={{
                background: isGenerating || !input ? 'rgba(255,255,255,0.05)' : '#00f3ff',
                color: isGenerating || !input ? '#475569' : '#030305',
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
                <><Loader2 size={16} className="animate-spin" /> Processing Infrastructure...</>
              ) : (
                <><Play size={16} fill="currentColor" /> Run Model</>
              )}
            </button>
          </div>

          {/* Output Interface */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>
              Output {output && <CheckCircle2 size={14} color="#00ff66" />}
            </label>
            <div 
              style={{
                width: '100%',
                minHeight: '160px',
                padding: '24px',
                borderRadius: '8px',
                background: '#050508',
                color: '#e2e8f0',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.9rem',
                whiteSpace: 'pre-wrap',
                overflowX: 'auto',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxSizing: 'border-box'
              }}
            >
              <AnimatePresence mode="wait">
                {output ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {output}
                  </motion.div>
                ) : (
                  <span style={{ color: '#475569' }}>// Awaiting instruction layout sequence...</span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 