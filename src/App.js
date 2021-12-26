import logo from './logo.svg';
import './index.css';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <div>
      <Hero />
      <About />
      <footer className="footer">
        <p className='footer-text'>© 2021 Jubayer Ahmed</p>
      </footer>
    </div>  
  );
}

export default App;
