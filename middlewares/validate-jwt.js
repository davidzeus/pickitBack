const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJasonWebToken = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "Falta token", 
    });
  }
  if (token === process.env.SUPERTOKEN) {
    return next();
  }else{
    return res.status(401).json({
        msg: "Token incorrecto",
      });
  }
  
};

module.exports = {
    validateJasonWebToken
}