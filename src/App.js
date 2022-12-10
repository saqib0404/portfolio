import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className='background-pattern'>
      <div>
        <Banner />
        <Nav />
        <About />
      </div>
    </div>
  );
}

export default App;
