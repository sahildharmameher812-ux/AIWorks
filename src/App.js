import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{ left: mousePosition.x - 200, top: mousePosition.y - 200 }}
      />
      
      {/* Floating Elements */}
      <div className="floating-elements">
        <span className="float-item float-1">✨</span>
        <span className="float-item float-2">💫</span>
        <span className="float-item float-3">🌸</span>
        <span className="float-item float-4">⭐</span>
        <span className="float-item float-5">🦋</span>
        <span className="float-item float-6">💖</span>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">👩‍💻</span>
            <span className="logo-text">Esha</span>
            <span className="logo-dot">.</span>
          </div>
          
          <div className="nav-links">
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
              <span className="nav-icon">🏠</span>
              <span>Home</span>
            </a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
              <span className="nav-icon">👤</span>
              <span>About</span>
            </a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
              <span className="nav-icon">💡</span>
              <span>Skills</span>
            </a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
              <span className="nav-icon">🚀</span>
              <span>Projects</span>
            </a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
              <span className="nav-icon">💌</span>
              <span>Contact</span>
            </a>
          </div>

          <a href="#contact" className="nav-cta">
            Let's Talk 💬
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Projects ✨
          </div>
          
          <div className="hero-avatar">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span className="avatar-emoji">👩‍💻</span>
              </div>
            </div>
            <div className="avatar-status">
              <span>🟢</span>
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Esha</span> 👋
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-text">Full-Stack Developer</span>
            <span className="subtitle-divider">•</span>
            <span className="typing-text">AI & ML Engineer</span>
            <span className="subtitle-divider">•</span>
            <span className="typing-text">Creative Coder</span>
          </div>

          <p className="hero-description">
            I craft <span className="highlight">intelligent web experiences</span> by merging 
            complex Machine Learning models with premium, high-performance UIs 
            to create <span className="highlight">next-gen applications</span> ✨
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noreferrer" className="btn-secondary">
              <span className="github-icon">⚡</span>
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-header">
          <span className="section-tag">👩‍🎓 Get to Know Me</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-card education-card">
            <div className="card-icon">🎓</div>
            <h3>The Engineer</h3>
            <p>
              Currently pursuing <strong>B.Tech in AI & ML Engineering</strong> (Pre-Final Year).
            </p>
            <p className="card-detail">
              My academic background allows me to understand data deeply. I bridge the gap 
              between theoretical <strong>Machine Learning algorithms</strong> and practical, 
              user-friendly <strong>Web Applications</strong>.
            </p>
            <div className="card-decoration">
              <span>🌸</span>
            </div>
          </div>

          <div className="about-card work-card">
            <div className="card-icon">💼</div>
            <h3>Professional Work</h3>
            <p>
              I don't just build websites; I build digital solutions that transform businesses.
            </p>
            <ul className="work-list">
              <li>
                <span className="work-icon">🏢</span>
                <div>
                  <strong>Seva Kendra Tarapur</strong>
                  <span>Optimized office management</span>
                </div>
              </li>
              <li>
                <span className="work-icon">🔐</span>
                <div>
                  <strong>Seva Kendra Rankol</strong>
                  <span>Secure record keeping systems</span>
                </div>
              </li>
            </ul>
            <div className="card-decoration">
              <span>✨</span>
            </div>
          </div>

          <div className="about-card passion-card">
            <div className="card-icon">💖</div>
            <h3>My Passion</h3>
            <p>
              I love creating beautiful, functional experiences that make people's lives easier.
            </p>
            <div className="passion-tags">
              <span>Clean Code 🧹</span>
              <span>UI/UX 🎨</span>
              <span>Innovation 💡</span>
              <span>Problem Solving 🧩</span>
            </div>
            <div className="card-decoration">
              <span>🦋</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-header">
          <span className="section-tag">💡 My Expertise</span>
          <h2 className="section-title">Tech <span className="gradient-text">Stack</span></h2>
        </div>

        <div className="skills-container">
          <div className="skill-category">
            <h3 className="category-title">
              <span>🎨</span> Frontend
            </h3>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-icon">⚛️</span>
                <span className="skill-name">React.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🌐</span>
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">✨</span>
                <span className="skill-name">Modern UI/UX</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span>⚙️</span> Backend
            </h3>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-icon">🐍</span>
                <span className="skill-name">Python (Flask/FastAPI)</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🗄️</span>
                <span className="skill-name">Supabase</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📦</span>
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <span>🤖</span> AI & ML
            </h3>
            <div className="skill-items">
              <div className="skill-item">
                <span className="skill-icon">🤗</span>
                <span className="skill-name">HuggingFace ML</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">💬</span>
                <span className="skill-name">LLM Chatbots</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📊</span>
                <span className="skill-name">Data Science</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '82%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-marquee">
          <div className="marquee-content">
            <span>React.js ⚛️</span>
            <span>Python 🐍</span>
            <span>FastAPI ⚡</span>
            <span>Supabase 🗄️</span>
            <span>HuggingFace 🤗</span>
            <span>LLM 💬</span>
            <span>UI/UX 🎨</span>
            <span>Machine Learning 🤖</span>
            <span>React.js ⚛️</span>
            <span>Python 🐍</span>
            <span>FastAPI ⚡</span>
            <span>Supabase 🗄️</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-header">
          <span className="section-tag">🚀 My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-number">01</span>
              <div className="project-tags">
                <span className="tag-live">🟢 Live</span>
              </div>
            </div>
            
            <div className="project-icon">🏢</div>
            <h3 className="project-title">Seva Kendra App</h3>
            <p className="project-description">
              A comprehensive office management system for handling service records and workflow automation.
            </p>
            
            <div className="project-tech">
              <span>React</span>
              <span>Node/Flask</span>
              <span>Database</span>
            </div>
            
            <a href="https://seva-kendra-app.onrender.com" target="_blank" rel="noreferrer" className="project-link">
              <span>View Project</span>
              <span className="link-arrow">↗</span>
            </a>
            
            <div className="project-notice">
              <span className="notice-icon">⏱️</span>
              <span>Free server wakes up in ~30s</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card featured">
            <div className="project-header">
              <span className="project-number">02</span>
              <div className="project-tags">
                <span className="tag-featured">⭐ Featured</span>
              </div>
            </div>
            
            <div className="project-icon">🗺️</div>
            <h3 className="project-title">FRA Project (WebGIS)</h3>
            <p className="project-description">
              Advanced Land Record Management System integrating GIS mapping for powerful data visualization.
            </p>
            
            <div className="project-tech">
              <span>Python</span>
              <span>WebGIS</span>
              <span>React</span>
            </div>
            
            <a href="https://fra1.onrender.com/" target="_blank" rel="noreferrer" className="project-link">
              <span>View Project</span>
              <span className="link-arrow">↗</span>
            </a>
            
            <div className="project-notice">
              <span className="notice-icon">⏱️</span>
              <span>Free server wakes up in ~30s</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-number">03</span>
              <div className="project-tags">
                <span className="tag-ai">🤖 AI</span>
              </div>
            </div>
            
            <div className="project-icon">🌾</div>
            <h3 className="project-title">Crop AI Recommendation</h3>
            <p className="project-description">
              Smart Farming tool using ML models to predict best crops based on soil data analysis.
            </p>
            
            <div className="project-tech">
              <span>ML/AI</span>
              <span>HuggingFace</span>
              <span>FastAPI</span>
            </div>
            
            <a href="https://cropai-frontend-3cpc.onrender.com" target="_blank" rel="noreferrer" className="project-link">
              <span>View Project</span>
              <span className="link-arrow">↗</span>
            </a>
            
            <div className="project-notice">
              <span className="notice-icon">⏱️</span>
              <span>Free server wakes up in ~30s</span>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noreferrer" className="btn-outline">
            <span>See More on GitHub</span>
            <span>⚡</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-decoration">
          <span className="deco-1">💌</span>
          <span className="deco-2">✨</span>
          <span className="deco-3">🌸</span>
        </div>
        
        <div className="contact-content">
          <span className="section-tag">💬 Get In Touch</span>
          <h2 className="contact-title">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="contact-description">
            Have a project in mind? I'd love to hear about it! Let's discuss how we can bring your ideas to life ✨
          </p>

          <div className="contact-buttons">
            <a href="https://wa.me/917028218213" target="_blank" rel="noreferrer" className="contact-btn whatsapp">
              <span className="btn-emoji">💬</span>
              <div className="btn-content">
                <span className="btn-label">WhatsApp</span>
                <span className="btn-value">+91 7028218213</span>
              </div>
              <span className="btn-arrow">→</span>
            </a>

            <a href="https://github.com/sahildharmameher812-ux" target="_blank" rel="noreferrer" className="contact-btn github">
              <span className="btn-emoji">⚡</span>
              <div className="btn-content">
                <span className="btn-label">GitHub</span>
                <span className="btn-value">sahildharmameher812-ux</span>
              </div>
              <span className="btn-arrow">→</span>
            </a>
          </div>

          <div className="contact-availability">
            <span className="availability-dot"></span>
            <span>Currently available for freelance projects</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">👩‍💻 Esha.DEV</span>
            <p>Crafting digital experiences with love & code 💖</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Esha Dev. Made with 💕 & lots of ☕</p>
          <p className="footer-tagline">Engineered for Performance & Aesthetics ✨</p>
        </div>
      </footer>
    </div>
  );
};

export default App;