import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
