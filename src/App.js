import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='background-pattern'>
      <div>
        <Banner />
        <Nav />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
