function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
          background: #0b0b1a;
          color: #eaeaea;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Animated background particles */
        body::before {
          content: "";
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 200, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 0, 150, 0.07) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .portfolio {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3.5rem;
        }

        /* Hero */
        .hero {
          text-align: center;
          width: 100%;
        }

        .avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          font-weight: 800;
          color: #fff;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
          transition: transform 0.3s ease;
        }
        .avatar:hover {
          transform: scale(1.05) rotate(5deg);
        }

        .name {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          background: linear-gradient(to right, #c084fc, #818cf8, #38bdf8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s ease infinite;
          margin-bottom: 0.5rem;
          word-break: break-word;
          display: inline-block;  /* prevents clipping inside the gradient */
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        .title {
          font-size: 1.3rem;
          color: #94a3b8;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Glass card */
        .glass-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          transition: transform 0.2s ease, border-color 0.2s;
        }
        .glass-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-3px);
        }

        .section-title {
          font-size: 1.9rem;
          font-weight: 700;
          margin-bottom: 1.8rem;
          background: linear-gradient(135deg, #e0e7ff, #c4b5fd);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        /* About */
        .about-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #cbd5e1;
        }
        .highlight {
          color: #c084fc;
          font-weight: 600;
        }

        /* Skills grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.2rem;
          margin-top: 1.5rem;
        }

        .skill-badge {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.2rem 0.8rem;
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
          color: #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .skill-badge::before {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.2), transparent);
          transition: left 0.5s;
        }
        .skill-badge:hover {
          border-color: #a855f7;
          color: #fff;
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.3);
        }
        .skill-badge:hover::before {
          left: 100%;
        }

        /* Project placeholder */
        .project-teaser {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 1rem;
        }
        .project-dot {
          width: 12px;
          height: 12px;
          background: #a855f7;
          border-radius: 50%;
          box-shadow: 0 0 15px #a855f7;
        }
        .project-label {
          font-size: 1rem;
          color: #94a3b8;
        }

        /* Footer */
        .footer {
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
          margin-top: 1rem;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .portfolio {
            padding: 3rem 1.2rem;
            gap: 2.5rem;
          }
          .name {
            font-size: 2.4rem;
          }
          .title {
            font-size: 1.1rem;
          }
          .avatar {
            width: 100px;
            height: 100px;
            font-size: 2.8rem;
          }
          .glass-card {
            padding: 1.8rem;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .about-text {
            font-size: 1rem;
          }
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 0.9rem;
          }
          .skill-badge {
            font-size: 0.9rem;
            padding: 1rem 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .name {
            font-size: 2rem;
          }
          .hero {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <div className="portfolio">
        <div className="hero">
          <div className="avatar">B</div>
          <h1 className="name">Bereket Zerihun</h1>
          <p className="title">Full‑Stack Developer</p>
        </div>

        <div className="glass-card">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm <span className="highlight">passionate about coding</span> and building digital solutions that
            make a real impact. Whether it's crafting seamless front‑end experiences or
            architecting robust back‑end systems, I thrive on turning ideas into reality
            with clean, efficient code.
          </p>
          <p className="about-text" style={{ marginTop: '1rem' }}>
            When I'm not coding, you'll find me exploring new technologies or sharpening my problem‑solving skills.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-grid">
            <div className="skill-badge">HTML5</div>
            <div className="skill-badge">CSS3</div>
            <div className="skill-badge">JavaScript</div>
            <div className="skill-badge">React</div>
            <div className="skill-badge">Node.js</div>
            <div className="skill-badge">Express</div>
            <div className="skill-badge">MongoDB</div>
            <div className="skill-badge">REST APIs</div>
            <div className="skill-badge">Git & GitHub</div>
            <div className="skill-badge">Responsive</div>
          </div>
        </div>

        <div className="glass-card" style={{ textAlign: 'center' }}>
          <div className="project-teaser">
            <span className="project-dot"></span>
            <span className="project-label">Building something awesome — stay tuned!</span>
            <span className="project-dot"></span>
          </div>
        </div>

        <p className="footer">
          &copy; {new Date().getFullYear()} Bereket Zerihun
        </p>
      </div>
    </>
  );
}

export default App;