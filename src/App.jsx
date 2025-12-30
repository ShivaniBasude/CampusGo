// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import OrderPage from "./pages/OrderPage";
import "./pages/PaymentPage.jsx";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 shadow-lg flex items-center justify-center">
        {/* stylized scooter icon using SVG */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13h2l1-4h9l2 4h1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="18" r="2" stroke="white" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2" stroke="white" strokeWidth="1.5" />
          <path d="M11 7v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="text-white">
        <div className="text-xl font-bold tracking-wide">CampusGo</div>
        <div className="text-xs opacity-80">Campus Delivery</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Logo />

          <div className="flex gap-6 items-center">
            <Link to="/" className="text-sm font-medium hover:opacity-80">Home</Link>
            <Link to="/order" className="text-sm font-medium hover:opacity-80">Order</Link>
            <button className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg text-black font-semibold">Get App</button>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 shadow-2xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </div>
        </main>

        <footer className="max-w-6xl mx-auto p-6 text-center opacity-70">© 2025 CampusGo — Made for campus convenience</footer>
      </div>
    </Router>
  );
}
