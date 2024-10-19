import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import Favorites from "../favorites/Favorites";
import { FaHeart } from "react-icons/fa";
import './UserProfile.css';
function UserProfile() {
  const { currentUser } = useContext(userLoginContext);
  return (
    <div>
      <div className="fs-2 text-primary text-center">
        <h2>
          Welcome, {currentUser?.username}
          </h2>
      </div>
      <div className="favorites-section">
        <h3 className="fs-2 text-info text-center p-5">Your Favorites <FaHeart style={{ color: 'red' }} /></h3>
        <Favorites />
      </div>
    </div>
  );
}

export default UserProfile;
