import React, { useState, useEffect } from 'react'
import './index.css';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Photography from './components/Photography.jsx';
import Resume from './components/Resume.jsx';
import LoadingScreen from './components/Loading.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const today = new Date();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
      <Hero />
      <About />
      <Photography />
      {/* <Resume /> */}
      <footer className="footer">
        <p className='footer-text'>© {today.getFullYear()} Jubayer Ahmed</p>
        <div class="footer-social-links">
  <a href="https://www.facebook.com/ju.buyer" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
  <a href="https://www.instagram.com/ju.buyer/" title="Instagram" target="_blank"><i class="fa fa-instagram"></i></a>
  <a href="https://www.linkedin.com/in/jubayera/" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
</div>
      </footer>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;
