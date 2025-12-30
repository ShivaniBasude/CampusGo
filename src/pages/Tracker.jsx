// pages/Tracker.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTruckMoving } from "react-icons/fa";

export default function Tracker() {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2><FaTruckMoving /> Order Tracking</h2>
      <p>Status: Out for Delivery</p>

      <div className="progress">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}
