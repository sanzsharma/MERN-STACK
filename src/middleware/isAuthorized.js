import { WebUser } from "../schema/model.js";

let isAuthorized = (roles) => {
  return async (req, res, next) => {
    try {
      let _id = req._id;
      let result = await WebUser.findById(_id);
      let tokenRole = result.roles;
      if (roles.includes(tokenRole)) {
        next();
      } else {
        let error = new Error("User is not authorized");
        throw error;
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "user is not authorized",
      });
    }
  };
};

export default isAuthorized;
