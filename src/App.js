import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  return (
    <div className='background-pattern'>
      {
        loading ?
          <div className='flex justify-center items-center h-screen'>
            <ScaleLoader
              color="#f7f7f7"
              loading={loading}
              size={80}
            />
          </div>
          :
          <div>
            <Banner />
            <Nav />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
      }

    </div>
  );
}

export default App;
