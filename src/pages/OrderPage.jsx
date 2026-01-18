import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function OrderPage() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

 const [address, setAddress] = useState("");
 const [pickupPerson, setPickupPerson] = useState("");
 const [phone, setPhone] = useState("");
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


  const placeOrder = () => {
    if (
      !address || !pickupPerson || !phone
    ) {
      alert("Please fill all details");
      return;
    }

    alert("Order details saved!");
    
    navigate("/payment");
  };

  return (
    <>
      

      <div className="page-container">
        <h2>Order Details</h2>

        <div className="order-summary">
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <span>{item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>

        <div className="order-form">
          <input
            name="address"
            placeholder="Delivery Address / Hostel"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            name="pickupPerson"
            placeholder="Pickup Person Name"
            value={pickupPerson}
            onChange={(e) => setPickupPerson(e.target.value)}
          />

          <input
            name="phone"
            placeholder="Contact Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button onClick={placeOrder}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
}
