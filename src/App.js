import React from "react";
import { useState } from "react" ;
import { useEffect } from "react" ;
import {  Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import "./styles.css";
import Navbar from "./components/Navbar";
import FeedbackPage from "./pages/FeedbackPage";


export default function App() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect( () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [search , setSearch ] = useState("");
  const [category , setCategory ] = useState("All");

  return (   
    
<>
     <Navbar
     cartCount={cart.reduce( (sum, i) => sum + i.qty, 0)}
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      />

        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} search={search} category={category}/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          
        </Routes>
 </>  
  );
}
