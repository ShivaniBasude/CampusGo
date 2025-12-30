import { useState } from "react";
import Navbar from "../components/Navbar";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFav = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <>
    

    <div className="page-container">
      <h2>Your Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (

        <div className="fav-grid">
            {favorites.map((item)=>(
                <div key={item.id} className="fav-card">
                    <img src={item.image} alt={item.name} className="fav-item-img"/>
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={()=>removeFav(item.id)}>Remove</button>
                </div>    
            )) }
        </div>
      )}
    </div>
    </>
    
  );
}
