import jwt from "jsonwebtoken";
import { secretKey } from "../constant/constant.js";
let isAuthenticated = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];

    let user = await jwt.verify(token, secretKey);

    req._id = user._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token not valid",
    });
  }
};

export default isAuthenticated;
