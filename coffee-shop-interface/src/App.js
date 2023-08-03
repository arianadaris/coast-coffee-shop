import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

import Home from './pages/Home';
import Menu from './pages/Menu';
import LogIn from './pages/LogIn';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Product from './pages/Product';
import About from './pages/About';
import Rewards from './pages/Rewards';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            {/* Unprotected Routes */}
            <Route path="" element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="account/signup" element={<LogIn signup={false} />} />
            <Route path="account/login" element={<LogIn signup={true} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:productName/:productId" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="rewards" element={<Rewards />} />

            {/* Protected Routes */}
            <Route path="account" element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
