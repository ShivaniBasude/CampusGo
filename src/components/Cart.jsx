export default function Cart({ cart, removeFromCart, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty 🛒</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.image} {item.name}</span>
              <span>₹{item.price}</span>
              <button onClick={() => removeFromCart(index)}>❌</button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button className="order-btn" onClick={placeOrder}>
            Place Order
          </button>
          setCart([]);

        </>
      )}
    </div>
  );
}
