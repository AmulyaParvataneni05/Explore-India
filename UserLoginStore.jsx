import { userLoginContext } from "./userLoginContext";
import { useState, useEffect } from "react";
import axios from "axios";
function UserLoginStore({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [err, setErr] = useState("");
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setUserLoginStatus(true);
      setUserToken(token);
      const username = sessionStorage.getItem("username");
      if (username) {
        setCurrentUser({ username });
      }
    }
  }, []);

  // Function to handle user login
  async function loginUser(userCred) {
    try {
      let res = await fetch(`http://localhost:5000/user-api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCred),
      });
      let result = await res.json();
      if (res.ok && result.message === "login success") {
        setCurrentUser(result.user);
        setUserLoginStatus(true);
        setUserToken(result.token); // Save token in state
        setErr("");
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("username", result.user.username); // Storing username
      } else {
        setErr(result.message); // Set error message
        setCurrentUser(null);
        setUserLoginStatus(false);
        setUserToken(null);
      }
    } catch (error) {
      // Error handling for network or other issues
      setErr(error.message || "An error occurred");
      setCurrentUser(null);
      setUserLoginStatus(false);
      setUserToken(null);
    }
  }
  

  // Function to handle adding to favorites
  async function addToFavorites ({ imageSrc, title, location, bookUrl, locateUrl }){
    if (!userToken) {
      console.error("User is not logged in");
      setErr("Please login first");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/user-api/add-to-favorites",
        { place: { imageSrc, title, location, bookUrl, locateUrl } },
        {
          headers: {
            Authorization: `Bearer ${userToken}` // Pass the token in the Authorization header
          }
        }
      );

      if (response.data.message === "Place added to favorites") {
        console.log("Place added to favorites");
      } else {
        console.error("Failed to add place to favorites:", response.data.message);
        setErr(response.data.message || "Failed to add place to favorites");
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
      setErr("Error adding place to favorites");
    }
  };

  // Function to handle user logout
  function logoutUser() {
    setCurrentUser(null);
    setUserLoginStatus(false);
    setUserToken(null); // Clear token from state
    setErr("");
    // Remove token and username from sessionStorage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    // Clear all localStorage favorited items when logging out
    const allFavoritedKeys = Object.keys(localStorage).filter(key => key.endsWith("_favorited"));
    allFavoritedKeys.forEach(key => {
      localStorage.removeItem(key);
    });
  }

  return (
    <userLoginContext.Provider
      value={{
        loginUser,
        logoutUser,
        userLoginStatus,
        err,
        currentUser,
        userToken,
        addToFavorites ,
      }}
    >
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
