import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [details, setDetails] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const proceed = () => {
    if (!details.name || !details.phone || !details.address) {
      alert("Please fill all details");
      return;
    }
    alert("Proceeding to payment (dummy)");
    navigate("/");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className="page-container">
        <h2>Checkout</h2>

        <div className="checkout-summary">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <span>{item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </div>

        <div className="checkout-form">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input
            name="address"
            placeholder="Hostel / Block"
            onChange={handleChange}
          />

          <button onClick={proceed}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
}
