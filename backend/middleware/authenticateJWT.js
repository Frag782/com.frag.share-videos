const jwt = require('jsonwebtoken');

export const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
}