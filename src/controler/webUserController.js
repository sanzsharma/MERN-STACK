import bcrypt from "bcrypt";
import { WebUser } from "../schema/model.js";
import { sendMail } from "../utils/sendmail.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constant/constant.js";
// import { errorMonitor } from "nodemailer/lib/xoauth2/index.js";

// let hashedPassword = await bcrypt.hash(req.body.password, 10);
export const createWebUserController = async (req, res) => {
  try {
    let data = req.body;

    let hashPassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      password: hashPassword,
      isVerifiedEmail: false,
    };

    let result = await WebUser.create(data);

    // generate token
    let infoObj = {
      _id: result._id,
    };

    let expiryInfo = {
      expiresIn: "365d",
    };

    let token = jwt.sign(infoObj, secretKey, expiryInfo);

    await sendMail({
      from: '"Express5" <uniquekc425@gmail.com>"',
      to: [data, email],
      subject: "account create",
      html: `
          <h1> please click the given link to verify your account </h1>
          <a href="http://localhost:5000/reset-password?token =${token}">http://localhost:5000/reset-password?token =${token}</a>
          `,
    });

    res.json({
      success: true,
      message: "user created successfully.",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmailController = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    // console.log(token);

    // //verify token
    let infoObj = await jwt.verify(token, secretKey);
    // console.log(infoObj);
    let userId = infoObj._id;

    let result = await WebUser.findByIdAndUpdate(
      userId,
      {
        isVerifiedEmail: true,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "user verified successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    let email = req.body.email; //email get
    let password = req.body.password; //password get

    let user = await WebUser.findOne({ email: email });
    // console.log(user);
    //if user exist then work here ottherwise throw error
    if (user) {
      if (user.isVerifiedEmail) {
        let isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          let infoObj = {
            _id: user._id,
          };

          let expiryInfo = {
            expiresIn: "365d",
          };

          let token = jwt.sign(infoObj, secretKey, expiryInfo);
          res.json({
            success: true,
            message: "user login successfull",
            data: token,
          });
        } else {
          let error = new Error("credential doesnot match");
          throw error;
        }
      } else {
        let error = new Error("credential doesnot match");
        throw error;
      }
    } else {
      let error = new Error("credential dosenot match");
      throw error;
    }
  } catch (error) {
    res.json({
      success: true,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let result = await WebUser.findById(_id);
    res.status(200).json({
      success: true,
      message: "profile read successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to read profile",
    });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllUserController = async (req, res) => {
  try {
    let result = await WebUser.find({});
    res.json({
      success: true,
      message: "read all user successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificUserController = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await WebUser.findById(id);
    res.json({
      success: true,
      message: "user read successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteSpecificUserController = async (req, res) => {
  try {
    let id = req.params.id;

    let result = await WebUser.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "user deleted succefully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateSpecificUserController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;

    let result = await WebUser.findByIdAndUpdate(id, data, { new: true });
    res.status(201).json({
      success: true,
      message: "user updated succefully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgetPasswordController = async (req, res, next) => {
  try {
    let email = req.body.email;

    let result = await WebUser.findOne({ email: email });
    // result => null
    // result => {....}

    if (result) {
      // generate token and

      // generate token
      let infoObj = {
        _id: result._id,
      };
      let expiryInfo = {
        expiresIn: "5d",
      };
      let token = jwt.sign(infoObj, secretKey, expiryInfo);

      // send mail with link

      await sendMail({
        from: '"Express5" <uniquekc425@gmail.com>"',
        to: [email],
        subject: "Forgot password",
        html: `
            <h1> please click the given link to reset your password </h1>
            <a href="http://localhost:5000/reset-password?token =${token}">http://localhost:5000/reset-password?token =${token}</a>
            `,
      });

      res.status(200).json({
        success: true,
        message: "Reset password link has been sent to the email",
      });
    } else {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPasswordController = async (req, res) => {
  try {
    let _id = req._id;
    let password = req.body.password;

    let hashPassword = await bcrypt.hash(password, 10);

    let result = await WebUser.findByIdAndUpdate(
      _id,
      {
        password: hashPassword,
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Password reset successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// export const updatedProfileController = async (req, res) => {

//   try {
//     let _id = req._id;
//     let data = req.body;
//     delete data.email;
//     delete data.password;

//     let result = await webUser.findIdAndUpdate(_id, data, { new: true });
//     res.status(201).json({
//       success: true,
//       message: "profile updated successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// in bcrypt package

// let hashedPassword = await bcrypt.hash(password, 10) for hashing
//                                            password,   hashedPassword
// let isValidPassoed=  await bcrypt.compare("Password@1","$2b$10$pbDKu2eQkyzPWnHLIZbWS.lgW/YweaSJA./vy51vbcd7p5VhhduK2")
// this code will return either true or false
// it return true if hashPassword is made from password else it return false

//camel case is  Js
//kabab case => route and css
//Upppercase => dot env
