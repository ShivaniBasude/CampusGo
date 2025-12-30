import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const placeOrder = () => {
    alert("Order placed successfully!");
    localStorage.removeItem("cart"); // ✅ cart emptied
    navigate("/");
  };

  const total = cart.reduce((sum, item) => sum + item.price*item.qty, 0);

    const updateQty = (id, change) => {
    const updated = cart
    .map((item)=>
        item.id===id ? {...item,qty: item.qty+change} :item
    )
    .filter((item)=>item.qty>0);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
 };

  return (
    <>
    
    <div className="page-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty 🛒</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              <div className="cart-left">
                 <img src={item.image} alt={item.name} className="cart-img" /> 
                 <span>{item.name}</span>
              </div>
             
              <div className="cart-right">
                <div className="cart-qty-controls">
                  <button onClick={()=> updateQty(item.id , -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={()=> updateQty(item.id , 1)}>+</button>
                </div>

                <span className="cart-price">₹{item.price * item.qty}</span>

              </div>
             </div>

          ))}

          <h3>Total: ₹{total}</h3>
          <button className="order-btn" onClick={()=> navigate("/order")}>
            Place order
          </button>
        </>
      )}
    </div>
    </>
  );
}
