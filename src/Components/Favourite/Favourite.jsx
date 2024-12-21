const Favorites = ({ favorites, onRemoveFavorite }) => {
    if (favorites.length === 0) return null;
  
    return (
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-1">Favorite Locations</h2>
        <ul>
          {favorites.map((fav, index) => (
            <li
              key={index}
              className="border border-slate-400 mx-3 p-4 mb-1 rounded-lg flex justify-between items-center"
            >
              <span className="text-2xl font-bold ">{fav.location.name}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveFavorite(fav.location.name)}
                title="Remove from favorites"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22m-5 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2"
                    />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Favorites;