import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to Formspree, EmailJS, or your backend.
    // For now, we will just show a success message.
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Let's Build Something Smart.</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Fill out the form below with your project details, and I'll get back to you within 24 hours.
      </p>

      {submitted ? (
        <div style={{ padding: '20px', backgroundColor: '#e6ffe6', border: '1px solid #b3ffb3', borderRadius: '8px', color: '#006600', textAlign: 'center' }}>
          <strong>Message Sent!</strong> I look forward to connecting with you.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Name</label>
            <input 
              type="text" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label>
            <input 
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Project Details / Budget</label>
            <textarea 
              required 
              rows="5"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }} 
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{ backgroundColor: '#000', color: '#fff', padding: '12px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;