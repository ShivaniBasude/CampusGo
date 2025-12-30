export default function ItemCard({ item, addToCart, toggleFav, isFav, qty, updateQty }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p className="item-price">₹{item.price}</p>

      <div className="item-actions">
        {qty===0?(
        <button className="item-add-btn" onClick={() => addToCart(item)}>Add</button>
      ):(
        <div className="item-qty-controls">
            <button onClick={()=> updateQty(item.id , -1)}>-</button>   
            <span>{qty}</span>
            <button onClick={()=> updateQty(item.id , 1)}>+</button>   
        </div>
      )}
      
        <button className="fav-btn" onClick={() => toggleFav(item)}>
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      
    </div>
  );
}
