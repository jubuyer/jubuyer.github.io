import React, { useState, useEffect } from 'react'
import './index.css';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import LoadingScreen from './components/Loading.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
      <Hero />
      <About />
      <footer className="footer">
        <p className='footer-text'>© 2021 Jubayer Ahmed</p>
      </footer>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;
