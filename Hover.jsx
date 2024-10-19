import { useContext, useState, useEffect } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './Hover.css';

function Hover({ imageSrc, title, location, bookUrl, locateUrl }) {
  const { addToFavorites, userToken } = useContext(userLoginContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favoritedStatus = localStorage.getItem(`${title}_favorited`);
    if (favoritedStatus) {
      setIsFavorited(JSON.parse(favoritedStatus));
    }
  }, [title]);

  useEffect(() => {
    localStorage.setItem(`${title}_favorited`, JSON.stringify(isFavorited));
  }, [isFavorited, title]);

  const handleFavoriteClick = () => {
    if (!userToken) {
      navigate('/login');
      return;
    }

    if (!isFavorited) {
      addToFavorites({ imageSrc, title, location, bookUrl, locateUrl });
      setIsFavorited(true);
    }
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={title} style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
          <h1 className="title text-decoration-underline">{title}</h1>
          <h2 className="location">{location}</h2>
          <br />
          <div className="locate">
            <a href={bookUrl}>
              <button> <FaHotel size={20} color="white" />      BOOK HOTEL</button>
            </a>
            <br />
            <a href={locateUrl}>
              <button> <FaMapMarkerAlt size={20} color="white" /> LOCATE</button>
            </a>
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleFavoriteClick}
            className={`fa-heart ${isFavorited ? 'favorited' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Hover;
