import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from './pages/Home';
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/productDetail";
//import { Admin } from './admin/Admin';
import { NoPage } from './pages/NoPage';
import {Cart} from './pages/cart';
import {CartContext} from './components/context';

function App() {
  const [carrito, setCarrito] = useState([]);
  const addToCarrito = (item) => {
  	const newShoppingCart = [...carrito];
    newShoppingCart.push(item);
    setCarrito(newShoppingCart);
  }
  return (
    <>
    <CartContext.Provider value={{
      carrito,
      addToCarrito,
    }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </CartContext.Provider>
    
      </>
  );
}

export default App;
