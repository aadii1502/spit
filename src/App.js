
import './App.css';
import Home from './components/Home';
import Carousel from './components/Carousel'
import About from './components/About';
import Campaign from './components/Campaign';
import About2 from './components/About2';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <Carousel/>
      <About/>
      <Campaign/>
      <About2/>
      <Footer/>
    </div>
  );
}

export default App;
