const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
require('dotenv').config();

const tokenVerify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'abcdef');
        req.userId = new ObjectId(decoded.id); // Attach the user ID to the request
        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = tokenVerify;
