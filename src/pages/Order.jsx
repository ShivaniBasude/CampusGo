// pages/Order.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBox } from "react-icons/fa";

export default function Order() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h2><FaBox /> Place Your Order</h2>

      <input placeholder="Item name" />
      <input placeholder="Delivery location" />
      <select>
        <option>Select Store</option>
        <option>Canteen</option>
        <option>Stationery</option>
        <option>Grocery</option>
      </select>

      <button onClick={() => navigate("/payment")}>
        Continue to Payment
      </button>
    </motion.div>
  );
}
