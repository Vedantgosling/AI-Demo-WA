import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, ArrowRight, Zap } from 'lucide-react';

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
      {/* Clean Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px auto' }}>
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
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-main)',
            marginBottom: '24px',
            letterSpacing: '-0.03em'
          }}
        >
          Scale your business with <br />
          <span style={{ color: 'var(--accent-primary)' }}>Intelligent Automation.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.25rem',
            marginBottom: '40px',
            lineHeight: 1.6
          }}
        >
          We build custom AI agents, deploy secure Large Language Models, and automate your most complex data workflows so you can focus on growth.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/demos" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-hover)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'var(--accent-primary)',
                color: '#fff',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'
              }}
            >
              Explore Our Services <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Realistic Services Grid */}
      <motion.h2 
        variants={itemVariants}
        style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--text-main)' }}
      >
        Core Capabilities
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '60px'
      }}>
        {[
          {
            icon: Bot,
            title: "Custom AI Agents",
            desc: "Customer support and internal knowledge-base bots trained strictly on your company's proprietary data."
          },
          {
            icon: Workflow,
            title: "Workflow Automation",
            desc: "Connect your existing software stack with AI decision-makers to eliminate repetitive manual tasks."
          },
          {
            icon: BarChart3,
            title: "Predictive Analytics",
            desc: "Turn raw spreadsheets into actionable business intelligence using machine learning models."
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="crisp-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '12px', 
              background: '#eff6ff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px',
              color: 'var(--accent-primary)'
            }}>
              <card.icon size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-main)' }}>{card.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}