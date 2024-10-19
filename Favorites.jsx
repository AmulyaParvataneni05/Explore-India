import { useContext, useState, useEffect } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './Favorites.css';

function Favorites() {
  const { userToken, setUserToken } = useContext(userLoginContext);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate('/login');
      return;
    }

    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user-api/favorites", {
          headers: { Authorization: `Bearer ${userToken}` }
        });
        setFavorites(response.data.favorites || []);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [userToken]);

  const removeFavorite = async (favoriteId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/user-api/remove-favorite/${favoriteId}`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });

      if (response.data.message === "Favorite removed") {
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== favoriteId));
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <div className="favorites-container">
      {favorites.length === 0 ? (
        <p className="display-1 text-center text-danger">No favorites added</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((favorite) => (
            <div className="flip-card" key={favorite.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={favorite.imageSrc} alt={favorite.title} style={{ width: '300px', height: '300px' }} />
                </div>
                <div className="flip-card-back">
                  <h1 className="title text-decoration-underline">{favorite.title}</h1>
                  <h2 className="location">{favorite.location}</h2>
                  <br />
                  <div className="locate">
                    <a href={favorite.bookUrl}>
                      <button>BOOK HOTEL</button>
                    </a>
                    <br />
                    <a href={favorite.locateUrl}>
                      <button>LOCATE</button>
                    </a>
                  </div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => removeFavorite(favorite.id)}
                    className="fa-heart favorited"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
