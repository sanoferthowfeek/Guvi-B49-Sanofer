// server/routes/game.js
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);
  jwt.verify(token, 'secretkey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get('/status', authenticateToken, (req, res) => {
  res.json({ status: 'Authenticated' });
});

module.exports = router;
