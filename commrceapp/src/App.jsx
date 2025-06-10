import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CartPage from './CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
