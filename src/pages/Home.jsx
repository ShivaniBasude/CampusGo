import { useState } from "react";
import { useEffect } from "react";
import items from "../data/items";
import ItemCard from "../components/ItemCard";
import Cart from "../components/Cart";
import Favorites from "../components/Favorites";


export default function Home({cart, setCart, search, category}) {

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
 
  const [showCart, setShowCart] = useState(false);
  const [showFav, setShowFav] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
        
      );
    }
    else{
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const toggleFav = (item) => {
    setFavorites((prev) =>
      prev.find((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  const removeFromCart = (index) => {
  setCart(cart.filter((_, i) => i !== index));
};

const placeOrder = () => {
  alert("Order placed successfully!");
  setCart([]); // cart empty (temporary)
  setShowCart(false);
};

const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => category === "All" || item.category === category);

  const getQty = (id) => {
  const item = cart.find((i) => i.id === id);
  return item ? item.qty : 0;
};

const updateQty = (id, change) => {
  const updated = cart
    .map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + change }
        : item
    )
    .filter((item) => item.qty > 0);

  setCart(updated);
};


  return (
    <>
      
       {showCart ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          placeOrder={placeOrder}
        />
      ) : showFav ? (
        <Favorites favorites={favorites} toggleFav={toggleFav} />
      ) : null 
      }   

      <div className="hero">
        <h2>Order Anything on Campus</h2>
        <p>Fast • Affordable • Reliable</p>
      </div>
      
            
      <div className="items-grid">
        {filteredItems
        
        .map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            toggleFav={toggleFav}
            isFav={favorites.some((i) => i.id === item.id)}
            qty={getQty(item.id)}
            updateQty={updateQty}
          />
        ))}
      </div>

      <footer>CampusGo @All rights reserved</footer>
    </>
  );
}

