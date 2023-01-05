const user = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {

  try{
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({
      message: "Please login first",
      success: false,
    });
    const decoded= await jwt.verify(token, process.env.JWT_SECRET)
    req.user=await user.findById(decoded.id)
    next()
}
catch(error){
 res.status(500).json({
  success:false,
  message:error.message
 })
}

};
