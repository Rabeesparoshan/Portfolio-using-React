import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = (event) => {
    if (!event.target.closest('.dashboard-menu') && event.target.id !== 'dashboard-toggle') {
      setIsMenuActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className="App">
      {/* Background Image applied to the body */}
      <div className="background">
        <header className="header-bar">
          <div className="left-header">
            <button id="dashboard-toggle" className="dashboard-icon" onClick={toggleMenu}>
              &#9776;
            </button>
            <span className="site-name">Rabees Paroshan</span>
          </div>
        </header>

        {/* Sidebar Menu */}
        <nav id="dashboard-menu" className={`dashboard-menu ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Experience</li>
          </ul>
        </nav>

        {/* Centered Content */}
        <div className="content">
          <h1>Welcome to My Portfolio</h1>
          <p>Hello, I'm Rabees Paroshan, a second-year Computer Engineering student at Chennai institute of technology. I'm passionate about programming and have experience with languages like C++, Java, and Python. I'm interested in web development and software engineering, and I enjoy working on personal projects to apply my skills. I’m excited to explore new technologies and gain hands-on experience in the field.</p>

          
        </div>
      </div>
    </div>
  );
}

export default App;
