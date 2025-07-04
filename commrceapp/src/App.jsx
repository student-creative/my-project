import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CartPage from './CartPage';
import Product from './Product';
import Deals from './Deals';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
