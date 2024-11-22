const jwt = require ('jsonwebtoken');
require('dotenv').config();

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(403).json("Access denied.");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Invalid token.");
      }
      req.user = user;
      next();
    });
  };

module.exports = isAuthenticated;
  