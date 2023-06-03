import { Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="container">
      <h1 className="box-degrade">
        Welcome to the mato
      </h1>
      <Link to="/home" className="start-button">
        Start
      </Link>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

