import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Background Ambience - Glowing Blob */}
      <div className="blob"></div>

      {/* Navigation Bar */}
      <nav>
        <div className="logo">Esha<span className="glow-text">.DEV</span></div>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#skills">Stack</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="status-pill">● Available for Projects</div>
        <h1>
          Building <span className="glow-text">Intelligent</span><br />
          Web Experiences
        </h1>
        <p style={{color: '#94a3b8', maxWidth: '600px', margin: '20px 0', fontSize: '1.1rem', lineHeight: '1.6'}}>
          Full-Stack Developer | <b>AI & ML Engineer</b><br/>
          I merge complex Machine Learning models with premium, high-performance UIs to create next-gen applications.
        </p>
        
        <div style={{marginTop: '30px'}}>
          <a href="#projects" className="btn" style={{background: 'white', color: 'black'}}>View My Work</a>
          <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noreferrer" style={{marginLeft: '20px', color: 'white', textDecoration: 'none', fontWeight: '500'}}>
            GitHub Profile →
          </a>
        </div>
      </header>

      {/* Skills Ticker */}
      <section id="skills" style={{textAlign: 'center', marginBottom: '100px'}}>
        <p style={{marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: '#666'}}>Tech Stack</p>
        <div className="skills-ticker">
          <span className="skill-tag">⚛️ React.js</span>
          <span className="skill-tag">🐍 Python (Flask/FastAPI)</span>
          <span className="skill-tag">🗄️ Supabase</span>
          <span className="skill-tag">🤖 HuggingFace ML</span>
          <span className="skill-tag">💬 LLM Chatbots</span>
          <span className="skill-tag">🎨 Modern UI/UX</span>
        </div>
      </section>

      {/* About Section - SPLIT DESIGN */}
      <section id="about" style={{padding: '0 8%', maxWidth: '1200px', margin: '0 auto 100px'}}>
        <h2 className="section-title">About & Experience</h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          
          {/* Card 1: Education (The Engineer) */}
          <div className="project-card" style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(138,43,226,0.05) 100%)'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '15px', color: 'white'}}>🎓 The Engineer</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Currently pursuing <strong>B.Tech in AI & ML Engineering</strong> (Pre-Final Year).
              <br/><br/>
              My academic background allows me to understand data deeply. I bridge the gap between theoretical <strong>Machine Learning algorithms</strong> and practical, user-friendly <strong>Web Applications</strong>.
            </p>
          </div>

          {/* Card 2: Work Experience */}
          <div className="project-card" style={{background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(34,197,94,0.05) 100%)'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '15px', color: 'white'}}>💼 Professional Work</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              I don't just build websites; I build digital solutions. I have worked with organizations to digitize their entire workflow.
            </p>
            <ul style={{marginTop: '15px', marginLeft: '20px', color: '#94a3b8', lineHeight: '1.8'}}>
              <li>
                <strong style={{color: 'white'}}>Seva Kendra Tarapur:</strong> Optimized office management.
              </li>
              <li>
                <strong style={{color: 'white'}}>Seva Kendra Rankol:</strong> Secure record keeping systems.
              </li>
              <li style={{fontStyle: 'italic', marginTop: '10px', color: '#666'}}>
                "Client privacy is respected for other private projects."
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {/* Project 1: Seva Kendra */}
          <div className="project-card">
            <h3>Seva Kendra App</h3>
            <p style={{margin: '10px 0', color: '#ccc', fontSize: '0.9rem'}}>
              A comprehensive office management system for handling service records and workflow.
            </p>
            <div className="tech-stack">
              <span>React</span> <span>Node/Flask</span> <span>Database</span>
            </div>
            <a href="https://seva-kendra-app.onrender.com" target="_blank" rel="noreferrer" className="btn">Live Demo</a>
            
            {/* Disclaimer Box */}
            <div className="disclaimer">
              <span style={{fontSize: '1.2rem'}}>⚠️</span>
              <div>
                <strong>Server Note:</strong> Free demo instance takes ~30s to wake up. 
                <br/>
                <span style={{color: 'white', fontWeight: 'bold'}}>Premium deployment is instant.</span>
              </div>
            </div>
          </div>

          {/* Project 2: FRA */}
          <div className="project-card">
            <h3>FRA Project (WebGIS)</h3>
            <p style={{margin: '10px 0', color: '#ccc', fontSize: '0.9rem'}}>
              Advanced Land Record Management System integrating GIS mapping for data visualization.
            </p>
            <div className="tech-stack">
              <span>Python</span> <span>WebGIS</span> <span>React</span>
            </div>
            <a href="https://fra1.onrender.com/" target="_blank" rel="noreferrer" className="btn">Live Demo</a>
            <div className="disclaimer">
               <span>⚠️</span> <span>Free server wake-up time: ~30s.</span>
            </div>
          </div>

          {/* Project 3: Crop AI */}
          <div className="project-card">
            <h3>Crop AI Recommendation</h3>
            <p style={{margin: '10px 0', color: '#ccc', fontSize: '0.9rem'}}>
              Smart Farming tool using ML models to predict best crops based on soil data.
            </p>
            <div className="tech-stack">
              <span>ML/AI</span> <span>HuggingFace</span> <span>FastAPI</span>
            </div>
            <a href="https://cropai-frontend-3cpc.onrender.com" target="_blank" rel="noreferrer" className="btn">Live Demo</a>
             <div className="disclaimer">
               <span>⚠️</span> <span>Free server wake-up time: ~30s.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact">
        <h2 style={{fontSize: '3rem', marginBottom: '20px', fontFamily: 'Space Grotesk'}}>Let's Build Something Premium</h2>
        <p style={{color: '#94a3b8', marginBottom: '40px'}}>
          Have a project in mind? Let's discuss how we can bring it to life.
        </p>
        
        <a href="https://wa.me/917028218213" target="_blank" rel="noreferrer" className="contact-btn">
          Chat on WhatsApp (+91 7028218213) ↗
        </a>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px', alignItems: 'center'}}>
           <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noreferrer" style={{color: '#888', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <span style={{background: '#333', padding: '5px 10px', borderRadius: '5px'}}>GitHub</span> sahildharmameher812-ux
           </a>
        </div>
        
        <p style={{marginTop: '60px', fontSize: '0.8rem', color: '#333', borderTop: '1px solid #222', paddingTop: '20px', width: '100%'}}>
          © 2026 Esha Dev. Engineered for Performance & Aesthetics.
        </p>
      </footer>
    </div>
  );
};

export default App;
