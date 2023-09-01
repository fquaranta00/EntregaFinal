import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { auth } from './main';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import SendOrder from './components/SendOrder';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        {/* Renderiza el NavBar solo si el usuario ha iniciado sesión */}
        {userLoggedIn && <NavBar />}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/sendorder" element={<SendOrder />} />

          {/* Rutas protegidas por inicio de sesión */}
          {userLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/info" element={<Info />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/items/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </>
          ) : null}

          {/* Redirigir a /login si no se ha iniciado sesión */}
          <Route path="/*" element={(userLoggedIn || window.location.pathname === '/login' || window.location.pathname === '/signup') ? <Navigate to="/" /> : <Navigate to="/login" />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
