import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>

     <Navbar />
     <div>
     <Routes>
     <Route path="/" exact element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
