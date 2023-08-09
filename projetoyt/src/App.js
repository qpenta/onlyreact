import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Empresa' element={<Empresa />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
