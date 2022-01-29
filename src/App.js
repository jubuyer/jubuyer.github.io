import React, { useState, useEffect } from 'react'
import './index.css';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Photography from './components/Photography';
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
      <footer className="footer">
        <p className='footer-text'>© {today.getFullYear()} Jubayer Ahmed</p>
      </footer>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;
