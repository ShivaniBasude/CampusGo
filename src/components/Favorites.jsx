export default function Favorites({ favorites, toggleFav }) {
  return (
    <div className="fav-page">
      <h2>Your Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((item) => (
          <div key={item.id} className="fav-item">
            <span>{item.image} {item.name}</span>
            <button onClick={() => toggleFav(item)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
