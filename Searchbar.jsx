import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoginContext } from "../../contexts/userLoginContext";
import './Searchbar.css';
import { FaHeart } from "react-icons/fa";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useContext(userLoginContext);

  const statesAndUTs = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi',
    'Puducherry', 'Ladakh', 'Jammu and Kashmir'
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStates = statesAndUTs.filter(state =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStateClick = (state) => {
    const stateURL = state.replace(/\s+/g, '-').toLowerCase();
    navigate(`/states/${stateURL}`);
    setSearchTerm(''); // Reset search term after navigating
  };

  const handleUsernameClick = () => {
    navigate(`/user-profile/favorites`); // Navigate to favorites page
  };

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for a state or Union Territory"
          value={searchTerm}
          onChange={handleSearch}
        />
        {currentUser && (
          <div className="user-info" onClick={handleUsernameClick}>
            <div>
            <span className="username">{currentUser.username}</span>
            </div>
            <FaHeart style={{ color: 'red' }} />
          </div>
        )}
      </div>

      {searchTerm && (
        <ul>
          {filteredStates.map((state, index) => (
            <li key={index} onClick={() => handleStateClick(state)}>
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
