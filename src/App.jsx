import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
