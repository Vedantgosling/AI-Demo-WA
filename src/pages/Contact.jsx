import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, User, Briefcase } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputContainerStyle = (fieldName) => ({
    position: 'relative',
    background: 'rgba(10, 10, 15, 0.8)',
    border: `1px solid ${focusedField === fieldName ? '#00f3ff' : 'rgba(255, 255, 255, 0.08)'}`,
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: focusedField === fieldName ? '0 0 15px rgba(0, 243, 255, 0.15)' : 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '4px 16px'
  });

  const inputStyle = {
    width: '100%',
    padding: '12px 0 12px 12px',
    background: 'transparent',
    border: 'none',
    color: '#e2e8f0',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ maxWidth: '640px', margin: '40px auto', padding: '0 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass-panel"
        style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
      >
        {/* Subtle Ambient Accent Glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-20%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(188, 19, 254, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
          Let's Build Something Smart.
        </h2>
        <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '1.05rem', lineHeight: '1.5' }}>
          Fill out the form below with your project details, and I'll get back to you within 24 hours.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{ 
                padding: '32px 24px', 
                backgroundColor: 'rgba(0, 255, 102, 0.03)', 
                border: '1px solid rgba(0, 255, 102, 0.2)', 
                borderRadius: '12px', 
                color: '#00ff66', 
                textAlign: 'center'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <strong style={{ display: 'block', fontSize: '1.15rem', marginBottom: '6px', color: '#fff' }}>
                Message Sent Successfully
              </strong> 
              <span style={{ color: '#94a3b8' }}>Thank you for reaching out. Your prompt parameter has been cached in our routing grid.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Name Field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Full Name
                </label>
                <div style={inputContainerStyle('name')}>
                  <User size={18} style={{ color: focusedField === 'name' ? '#00f3ff' : '#475569', transition: 'color 0.3s' }} />
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Corporate Email
                </label>
                <div style={inputContainerStyle('email')}>
                  <Mail size={18} style={{ color: focusedField === 'email' ? '#00f3ff' : '#475569', transition: 'color 0.3s' }} />
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Project Details Field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Project Details / Budget Scope
                </label>
                <div style={{ ...inputContainerStyle('project'), alignItems: 'flex-start', padding: '12px 16px' }}>
                  <Briefcase size={18} style={{ color: focusedField === 'project' ? '#00f3ff' : '#475569', transition: 'color 0.3s', marginTop: '2px' }} />
                  <textarea 
                    required 
                    rows="4"
                    value={formData.project}
                    onFocus={() => setFocusedField('project')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    style={{
                      ...inputStyle,
                      padding: '0 0 0 12px',
                      resize: 'vertical',
                      minHeight: '100px'
                    }}
                  />
                </div>
              </div>

              {/* Submit Trigger */}
              <button 
                type="submit" 
                style={{ 
                  background: 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)', 
                  color: '#030305', 
                  padding: '14px', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  fontSize: '1rem', 
                  fontWeight: '700',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '8px',
                  boxShadow: '0 4px 20px rgba(0, 243, 255, 0.25)'
                }}
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}