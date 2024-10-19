import "./Hover.css";
import { FaYoutube } from "react-icons/fa";

function Hover3({ imageSrc, title, location, locateUrl }) { // Added locateUrl in the destructuring
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={title} style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
          <h1 className="title text-decoration-underline">{title}</h1>
          <h2 className="location">{location}</h2>
          <a href={locateUrl} target="_blank" rel="noopener noreferrer">
            <button> <FaYoutube size={20} color="red"/>     WATCH HERE</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hover3;