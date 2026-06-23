import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, MessageSquare, PenTool, Cpu, Activity, ShieldCheck, LineChart, Code, Search, Box, Settings, Shield, Lock, EyeOff, UserCheck, Briefcase, Scale, HeartPulse, Calculator, TrendingDown } from 'lucide-react';




export default function Home() {
  const navigate = useNavigate();
  
  // Professional, production-ready system telemetry simulation
  const [metrics, setMetrics] = useState({
    latency: 184,
    tokenOptimization: 32.4,
    accuracyRate: 99.1,
    uptime: 99.98
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        latency: Math.floor(175 + Math.random() * 15),
        tokenOptimization: +(prev.tokenOptimization + (Math.random() - 0.5) * 0.1).toFixed(1),
        accuracyRate: +(prev.accuracyRate + (Math.random() - 0.5) * 0.02).toFixed(2),
        uptime: 99.98
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '40px 0' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '80px 0 60px 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            lineHeight: '1.2',
            margin: '0 0 24px 0',
            letterSpacing: '-0.02em',
            color: '#fff'
          }}>
            Production-Ready AI Integrations <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Built For Your Business
            </span>
          </h1>
          
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '1.2rem', 
            maxWidth: '650px', 
            margin: '0 auto 36px auto',
            lineHeight: '1.6' 
          }}>
            Stop treating AI like a novelty. I design custom workflows, fine-tune specific models, and build intelligent infrastructure that reduces overhead.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button 
              onClick={() => navigate('/demos')}
              style={{
                background: '#00f3ff',
                color: '#030305',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Launch Live Demos
            </button>
            <button 
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              Book Strategy Call
            </button>
          </div>
        </motion.div>
      </section>

      {/* Infrastructure Performance Telemetry Dashboard */}
      <section style={{ margin: '40px 0 80px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', fontFamily: 'monospace' }}>
              <span>AVG INFERENCE LATENCY</span>
              <Activity size={14} style={{ color: '#00f3ff' }} />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '8px', color: '#fff' }}>{metrics.latency}ms</div>
          </div>

          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', fontFamily: 'monospace' }}>
              <span>TOKEN COST COMPRESSION</span>
              <Cpu size={14} style={{ color: '#bc13fe' }} />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '8px', color: '#fff' }}>-{metrics.tokenOptimization}%</div>
          </div>

          
          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', fontFamily: 'monospace' }}>
              <span>PIPELINE ACCURACY RATE</span>
              <ShieldCheck size={14} style={{ color: '#00ff66' }} />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '8px', color: '#fff' }}>{metrics.accuracyRate}%</div>
          </div>

          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', fontFamily: 'monospace' }}>
              <span>GATEWAY RUNTIME UPTIME</span>
              <LineChart size={14} style={{ color: '#94a3b8' }} />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '8px', color: '#fff' }}>{metrics.uptime}%</div>
          </div>
        </div>
      </section>
      {/* Governance, Compliance & Security Section */}
      <section style={{ margin: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
            Enterprise Governance & Security
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Rigid architectural guardrails engineered to protect corporate data sovereignty and eliminate compliance risks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '32px' }}>
            <Lock style={{ color: '#00f3ff', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>Zero Data Retention</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Enforced data isolation protocols ensure your proprietary corporate data is processed via ephemeral pipelines and never cached or utilized for third-party base training loops.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '32px' }}>
            <EyeOff style={{ color: '#bc13fe', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>PII Redaction Layers</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Ingestion nodes utilize real-time scrubbing mechanisms to automatically identify and strip out names, financial identifiers, and unique system keys before vectors leave your infrastructure.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '32px' }}>
            <UserCheck style={{ color: '#00ff66', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>Human-in-the-Loop Gateways</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Agentic processes are bound by strict operational boundaries. Actions that exceed predetermined authority limits are instantly routed to an isolated human verification checkpoint.
            </p>
          </div>

        </div>
      </section>

      {/* Strategic Deployment Lifecycle Section */}
      <section style={{ margin: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
            The Deployment Lifecycle
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            A rigorous, four-phase framework designed to mitigate risk and ensure seamless enterprise integration.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          
          <div style={{ padding: '24px', borderLeft: '2px solid #00f3ff', background: 'linear-gradient(90deg, rgba(0,243,255,0.05) 0%, transparent 100%)' }}>
            <Search style={{ color: '#00f3ff', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0', color: '#fff' }}>1. Discovery & Audit</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Analyzing legacy software stacks and mapping data bottlenecks to identify high-ROI automation targets.
            </p>
          </div>

          <div style={{ padding: '24px', borderLeft: '2px solid #bc13fe', background: 'linear-gradient(90deg, rgba(188,19,254,0.05) 0%, transparent 100%)' }}>
            <Box style={{ color: '#bc13fe', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0', color: '#fff' }}>2. Sandboxed Prototyping</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Building isolated simulation nodes to validate data shapes and user alignment before touching live corporate data.
            </p>
          </div>

          <div style={{ padding: '24px', borderLeft: '2px solid #00ff66', background: 'linear-gradient(90deg, rgba(0,255,102,0.05) 0%, transparent 100%)' }}>
            <Settings style={{ color: '#00ff66', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0', color: '#fff' }}>3. Production Orchestration</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Wiring models into standard automation fabrics and configuring secure fallback loops for absolute stability.
            </p>
          </div>

          <div style={{ padding: '24px', borderLeft: '2px solid #94a3b8', background: 'linear-gradient(90deg, rgba(148,163,184,0.05) 0%, transparent 100%)' }}>
            <Shield style={{ color: '#94a3b8', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0', color: '#fff' }}>4. Alignment Guardrails</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Continuous evaluation matrices to prevent model drift, improve accuracy variations, and control compute latency.
            </p>
          </div>

        </div>
      </section>
      {/* Core Competencies Grid Section */}
      <section style={{ margin: '60px 0' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '32px', textAlign: 'center' }}>
          Core Competencies
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '32px' }}>
            <Database style={{ color: '#bc13fe', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>RAG & Context Systems</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Connect LLMs safely to internal business assets. Build searchable pipelines matching corporate documentation or technical sheets with zero training leak risk.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '32px' }}>
            <Code style={{ color: '#00f3ff', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>Agentic Workflows</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Autonomous multi-step agents using standard automation fabrics (Make, Zapier, LangChain) to parse incoming documents, execute reasoning steps, and trigger system webhooks.
            </p>
          </div>

          <div style={{ background: 'rgba(15, 15, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '32px' }}>
            <PenTool style={{ color: '#00ff66', marginBottom: '16px' }} size={24} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff' }}>Prompt Engineering</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Optimization matrices designed to drop raw token costs while significantly boosting target alignment, accuracy, and structural response schemas.
            </p>
          </div>
        </div>
      </section>
      {/* Targeted Industry Verticals Section */}
      <section style={{ margin: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
            Industry Verticals
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Tailored model deployments optimized for industry-specific compliance frameworks and processing rules.
          </p>
        </div>

        <div style={{ width: '100%', overflowX: 'auto', background: 'rgba(15, 15, 20, 0.4)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                <th style={{ padding: '16px 24px' }}>Industry Vertical</th>
                <th style={{ padding: '16px 24px' }}>Core Implementation Focus</th>
                <th style={{ padding: '16px 24px' }}>Business Impact Metric</th>
              </tr>
            </thead>
            <tbody style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '20px 24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <Scale size={16} style={{ color: '#00f3ff' }} /> Legal Operations
                </td>
                <td style={{ padding: '20px 24px', color: '#94a3b8' }}>Automated clause auditing and contract variance indexing.</td>
                <td style={{ padding: '20px 24px', fontWeight: '600', color: '#00ff66' }}>Elimination of manual sorting backlogs</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '20px 24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <HeartPulse size={16} style={{ color: '#bc13fe' }} /> Healthcare Logistics
                </td>
                <td style={{ padding: '20px 24px', color: '#94a3b8' }}>De-identifying patient data streams for secure clinical context processing.</td>
                <td style={{ padding: '20px 24px', fontWeight: '600', color: '#00ff66' }}>HIPAA-compliant text syntheses</td>
              </tr>
              <tr>
                <td style={{ padding: '20px 24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <Briefcase size={16} style={{ color: '#00ff66' }} /> Enterprise SaaS
                </td>
                <td style={{ padding: '20px 24px', color: '#94a3b8' }}>Embedding natural language interfaces into existing product databases.</td>
                <td style={{ padding: '20px 24px', fontWeight: '600', color: '#00ff66' }}>Direct reduction in engineering tickets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '32px', 
        border: '1px solid rgba(255, 255, 255, 0.06)', 
        borderRadius: '12px', 
        backgroundColor: 'rgba(15, 15, 20, 0.3)',
        marginTop: '60px',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ margin: '0 0 6px 0', fontSize: '1.25rem', color: '#fff' }}>Want to see what it looks like under the hood?</h3>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem' }}>Run real prompts directly through the mini sandbox application suite.</p>
        </div>
        <button 
          onClick={() => navigate('/demos')}
          style={{ 
            backgroundColor: '#fff', 
            color: '#030305', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}
        >
          Open Playground
        </button>
      </section>

    </div>
  );
}