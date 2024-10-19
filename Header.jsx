import React, { useContext } from 'react';
import './Header.css';
import Searchbar from '../search/Searchbar';
import { Link, useNavigate } from 'react-router-dom';
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { IoHome } from "react-icons/io5";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { IoMdLogIn } from "react-icons/io";
import { RiInformation2Fill } from "react-icons/ri";
import { userLoginContext } from "../../contexts/userLoginContext"; // Import the context

function Header() {
  const { userLoginStatus, logoutUser } = useContext(userLoginContext); // Access login state and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();  // Logout the user
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <div>
      <div className="header">
        <LiaPlaneDepartureSolid className="fs-1" />
        <h1 className="headingmain">Explore India</h1>
        <LiaPlaneDepartureSolid className="fs-1" />
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="" className="nav-link">
                <IoHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="register" className="nav-link">
                <PiTrademarkRegisteredBold /> Sign Up
              </Link>
            </li>
            <li className="nav-item">
              {userLoginStatus ? (
                <button className="btn btn-link nav-link" onClick={handleLogout}>
                  <IoMdLogIn /> Sign Out
                </button>
              ) : (
                <Link to="login" className="nav-link">
                  <IoMdLogIn /> Sign In
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                <RiInformation2Fill /> About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header2'>
        <Searchbar />
      </div>
    </div>
  );
}

export default Header;
