import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, ArrowRight, Zap, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Home() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '60px 0' }}
    >
      {/* 1. THE HERO SECTION */}
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <motion.div 
          variants={itemVariants}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '100px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            marginBottom: '24px',
            fontSize: '0.85rem',
            color: 'var(--accent-primary)',
            fontWeight: 600
          }}
        >
          <Zap size={14} />
          <span>Next-Generation AI Solutions</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text-main)', marginBottom: '24px', letterSpacing: '-0.03em' }}
        >
          Scale your business with <br />
          <span style={{ color: 'var(--accent-primary)' }}>Intelligent Automation.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '40px', lineHeight: 1.6 }}
        >
          We build custom AI agents, deploy secure Large Language Models, and automate your most complex data workflows so you can focus on growth.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/demos" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-hover)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'var(--accent-primary)', color: '#fff', border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'
              }}
            >
              Explore Our Services <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 2. TRUST & SCALE SECTION (NEW) */}
      <motion.div variants={itemVariants} style={{ marginBottom: '100px' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '32px' }}>
          Trusted by forward-thinking enterprises
        </p>
        
        {/* Statistics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {[
            { icon: TrendingUp, stat: "$400M+", label: "Client ROI Generated" },
            { icon: Zap, stat: "1.2B", label: "Tokens Processed Daily" },
            { icon: ShieldCheck, stat: "99.99%", label: "API Uptime SLA" },
            { icon: Clock, stat: "15,000+", label: "Human Hours Saved" }
          ].map((item, i) => (
            <div key={i} className="crisp-card" style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <item.icon size={28} color="var(--accent-primary)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>{item.stat}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. CASE STUDIES BENTO GRID (NEW) */}
      <motion.div variants={itemVariants} style={{ marginBottom: '100px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Proven Transformations
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
            How we've completely re-architected workflows for global leaders using applied generative AI.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Large Featured Case Study */}
          <div className="crisp-card" style={{ gridColumn: '1 / -1', padding: '48px', background: 'linear-gradient(to right, #ffffff, #f0fdf4)', position: 'relative', overflow: 'hidden' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', background: '#dcfce7', color: '#166534', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '24px' }}>LOGISTICS & SUPPLY CHAIN</span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px', maxWidth: '600px' }}>
              Automating Global Freight Routing with Predictive LLMs
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '700px', marginBottom: '32px' }}>
              We deployed a custom multi-agent system that ingests real-time weather, port congestion, and shipping manifest data to dynamically reroute cargo. The result? A 22% reduction in transit delays and $14M saved in fuel costs in Q1 alone.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
               <strong style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>-22% Delays</strong>
               <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }}></div>
               <strong style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>$14M Saved</strong>
            </div>
          </div>

          {/* Half-width Case Study A */}
          <div className="crisp-card" style={{ padding: '32px' }}>
             <span style={{ display: 'inline-block', padding: '6px 12px', background: '#fee2e2', color: '#991b1b', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '24px' }}>FINANCE</span>
             <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>Fraud Detection Matrix</h3>
             <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
               Replaced legacy rule-based systems with a localized neural network that flags anomalous transaction patterns in 12ms.
             </p>
          </div>

          {/* Half-width Case Study B */}
          <div className="crisp-card" style={{ padding: '32px' }}>
             <span style={{ display: 'inline-block', padding: '6px 12px', background: '#e0e7ff', color: '#3730a3', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '24px' }}>HEALTHCARE</span>
             <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>Clinical Data Structuring</h3>
             <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
               Built a HIPAA-compliant parsing engine that extracts unstructured doctor's notes into clean, searchable JSON databases.
             </p>
          </div>
        </div>
      </motion.div>

      {/* 4. CORE CAPABILITIES (Original) */}
      <motion.div variants={itemVariants}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '32px', color: 'var(--text-main)', textAlign: 'center' }}>
          Our Technical Arsenal
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { icon: Bot, title: "Custom AI Agents", desc: "Customer support and internal knowledge-base bots trained strictly on your company's proprietary data." },
            { icon: Workflow, title: "Workflow Automation", desc: "Connect your existing software stack with AI decision-makers to eliminate repetitive manual tasks." },
            { icon: BarChart3, title: "Predictive Analytics", desc: "Turn raw spreadsheets into actionable business intelligence using machine learning models." }
          ].map((card, i) => (
            <div key={i} className="crisp-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--accent-primary)' }}>
                <card.icon size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-main)' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
}