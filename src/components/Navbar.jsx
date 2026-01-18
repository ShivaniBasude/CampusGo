import { useNavigate } from "react-router-dom";
import {useState} from "react";

export default function Navbar({ cartCount = 0 , search , setSearch , category , setCategory}) {
  const navigate = useNavigate() ;

  return (
    <div className="navbar">
      <div onClick={() => navigate("/")}>
        <span className="campusgo">CampusGo</span> 
      </div>


      <div className="info">
      <div className="search-filter">
        <input type="text" placeholder="Search items..." value={search}
        onChange={(e) => setSearch(e.target.value)} />

      </div>


      <div className="categories">
        <select value={category}
        onChange={ (e) => setCategory(e.target.value)} >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Desserts">Dessert</option>
          <option value="Beverages">Beverages</option>
          <option value="Books">Books</option>
          <option value="Stationery">Stationery</option>
        </select>
      </div>
      </div>

      <div className="panel">
        <span onClick={() => navigate("/")}>Home</span>
        
        <span onClick={() => navigate("/favorites")}>❤️ Favorites</span>
        <span onClick={() => navigate("/cart")}>
          🛒 Cart ({cartCount})
        </span>
      </div>
    </div>
  );
}
