const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenVerify = require('../middlewares/tokenVerify.js');
const expressAsyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

require('dotenv').config();
userApp.use(exp.json());

// JWT Secret from environment
const JWT_SECRET = process.env.JWT_SECRET || 'abcdef';

// Route to create user (public route)
userApp.post("/user", expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const newUser = req.body;

  // Check if the username already exists
  let existingUser = await usersCollection.findOne({ username: newUser.username });
  if (existingUser !== null) {
    res.send({ message: "User already existed" });
  } else {
    let hashedPassword = await bcryptjs.hash(newUser.password, 7);
    newUser.password = hashedPassword;

    // Initialize an empty array for favorites
    newUser.favorites = [];

    // Insert the new user into the collection
    await usersCollection.insertOne(newUser);
    res.send({ message: "User created successfully" });
  }
}));

// User login (authentication) (public route)
userApp.post('/login', expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const userCred = req.body;
  let dbUser = await usersCollection.findOne({ username: userCred.username });
  if (dbUser === null) {
    res.send({ message: "Invalid username" });
  } else {
    let result = await bcryptjs.compare(userCred.password, dbUser.password);
    if (result === false) {
      res.send({ message: "Invalid password" });
    } else {
      let signedToken = jwt.sign({ id: dbUser._id }, JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: "login success", token: signedToken, user: dbUser });
    }
  }
}));

// Route to add a place to favorites (protected route)
userApp.post("/add-to-favorites", tokenVerify, expressAsyncHandler(async (req, res) => {
  try {
    const usersCollection = req.app.get("usersCollection");
    const { place } = req.body;
    const userId = req.userId; // This should now be correctly set by the middleware

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    // Add the place to the user's favorites array
    const updateResult = await usersCollection.updateOne(
        { _id: userId },
        { $push: { favorites: place } }
    );

    if (updateResult.modifiedCount === 0) {
        return res.status(400).json({ message: "Failed to add to favorites" });
    }

    res.status(200).json({ message: "Place added to favorites" });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    res.status(500).json({ message: "Internal server error" });
  }
}));

// Route to get user's favorites (protected route)
userApp.get('/favorites', tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get('usersCollection');
  const userId = req.userId;

  if (!userId) {
      return res.status(401).json({ message: 'Unauthorized access' });
  }

  try {
      const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ favorites: user.favorites });
  } catch (error) {
      console.error('Error fetching favorites:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
}));

// Route to remove a favorite (protected route)
userApp.delete('/favorites/:favoriteId', tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get('usersCollection');
  const userId = req.userId;
  const favoriteId = req.params.favoriteId;

  try {
    const updateResult = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $pull: { favorites: { _id: new ObjectId(favoriteId) } } }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    res.status(200).json({ message: 'Favorite removed' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}));



/*const exp = require("express");
const userApp = exp.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenVerify = require('../middlewares/tokenVerify.js');
const expressAsyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

require('dotenv').config();
userApp.use(exp.json());
// JWT Secret from environment
const JWT_SECRET = process.env.JWT_SECRET || 'abcdef';

// Route to get users (protected route)
userApp.get("/users", tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  let usersList = await usersCollection.find().toArray();
  res.send({ message: "users", payload: usersList });
}));

// Route to send one user by username (protected route)
userApp.get("/users/:username", tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const usernameOfUrl = req.params.username;
  let user = await usersCollection.findOne({ username: usernameOfUrl });
  res.send({ message: "one user", payload: user });
}));

// Route to create user (public route)
userApp.post("/user", expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const newUser = req.body;

  // Check if the username already exists
  let existingUser = await usersCollection.findOne({ username: newUser.username });
  if (existingUser !== null) {
    res.send({ message: "User already existed" });
  } else {
    let hashedPassword = await bcryptjs.hash(newUser.password, 7);
    newUser.password = hashedPassword;

    // Initialize an empty array for favorites
    newUser.favorites = [];

    // Insert the new user into the collection
    await usersCollection.insertOne(newUser);
    res.send({ message: "User created successfully" });
  }
}));

// User login (authentication) (public route)
userApp.post('/login', expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const userCred = req.body;
  let dbUser = await usersCollection.findOne({ username: userCred.username });
  if (dbUser === null) {
    res.send({ message: "Invalid username" });
  } else {
    let result = await bcryptjs.compare(userCred.password, dbUser.password);
    if (result === false) {
      res.send({ message: "Invalid password" });
    } else {
      let signedToken = jwt.sign({ id: dbUser._id }, JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: "login success", token: signedToken, user: dbUser });
    }
  }
}));

// Route to update user (protected route)
userApp.put("/user", tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  let modifiedUser = req.body;
  await usersCollection.updateOne({ username: modifiedUser.username }, { $set: { ...modifiedUser } });
  res.send({ message: "User modified" });
}));

// Route to delete user (protected route)
userApp.delete("/user/:username", tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const usernameToDelete = req.params.username;
  await usersCollection.deleteOne({ username: usernameToDelete });
  res.send({ message: "User deleted" });
}));

// Route to add to favorites (protected route)
userApp.post("/add-to-favorites", tokenVerify, expressAsyncHandler(async (req, res) => {
  try {
      const usersCollection = req.app.get("usersCollection");
      const { place } = req.body;
      const userId = req.userId; // This should now be correctly set by the middleware

      if (!userId) {
          return res.status(401).json({ message: "Unauthorized access" });
      }

      // Add the place to the user's favorites array
      const updateResult = await usersCollection.updateOne(
          { _id: userId },
          { $push: { favorites: place } }
      );

      if (updateResult.modifiedCount === 0) {
          return res.status(400).json({ message: "Failed to add to favorites" });
      }

      res.status(200).json({ message: "Place added to favorites" });
  } catch (error) {
      console.error('Error adding to favorites:', error);
      res.status(500).json({ message: "Internal server error" });
  }
}));


// Route to get user's favorites (protected route)
userApp.get('/favorites', tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get('usersCollection');
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token missing or invalid' });
  }

  const token = authHeader.split(' ')[1];
  try {
      const decoded = jwt.verify(token, JWT_SECRET); // Use your actual secret key here
      console.log('Decoded token:', decoded);

      const user = await usersCollection.findOne({ _id: new ObjectId(decoded.id) }); // Use ObjectId for MongoDB if needed

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ favorites: user.favorites });
  } catch (error) {
      console.error('Error during token verification or fetching favorites:', error);
      if (error.name === 'JsonWebTokenError') {
          res.status(401).json({ message: 'Invalid token' });
      } else if (error.name === 'TokenExpiredError') {
          res.status(401).json({ message: 'Token expired' });
      } else {
          res.status(500).json({ message: 'Internal server error' });
      }
  }
}));

// Route to get a user's favorites by username (protected route)
// Example: Restricting to own favorites
// Route to add to favorites for a specific username (protected route)
userApp.post("/add-to-favorites/:username", tokenVerify, expressAsyncHandler(async (req, res) => {
  try {
    const usersCollection = req.app.get("usersCollection");
    const { place } = req.body;
    const username = req.params.username;

    // Find the user by username
    let user = await usersCollection.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the place to the user's favorites array
    const updateResult = await usersCollection.updateOne(
      { username: username },
      { $push: { favorites: place } }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(400).json({ message: "Failed to add to favorites" });
    }

    res.status(200).json({ message: "Place added to favorites" });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    res.status(500).json({ message: "Internal server error" });
  }
}));



userApp.delete('/favorites/:favoriteId', tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get('usersCollection');
  const userId = req.userId;
  const favoriteId = req.params.favoriteId;

  try {
    const updateResult = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $pull: { favorites: favoriteId } }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    res.status(200).json({ message: 'Favorite removed' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}));


*/

module.exports = userApp;
