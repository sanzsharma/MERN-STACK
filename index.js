// console.log("hello world");
//make express application
import express, { json } from "express";
import firstRouter from "./src/routes/firstRoter.js";
import foodRouter from "./src/routes/foodRouter.js";
import connectDb from "./src/connectdb/connectMongodb.js";
import teacherRouter from "./src/routes/teacherRouter.js";
import clothRouter from "./src/routes/clothRouter.js";
import randomRouter from "./src/routes/randomRouter.js";
import userRouter from "./src/routes/userRouter.js";
import productRouter from "./src/routes/productRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
import webUserRouter from "./src/routes/webUserRouter.js";
import detailRouter from "./src/routes/detailRouter.js";
import addressRouter from "./src/routes/addressRouter.js";
import cors from "cors";

let expressApp = express();
let corseOption = {
  origin: [
    "http://localhost:8002",
    "http://localhost:8001",
    "https://project-dw.onrender.com",
  ],
};

expressApp.use(cors(corseOption));

expressApp.use(json()); //always write in down from expressApp so it is capabale to take json file
expressApp.use(cors());

// expressApp.use((req, res, next) => {
//   console.log("i am application middleware1");
//   next();
// });

// expressApp.use((req, res, next) => {
//   console.log("i am application middleware2");
// });

//mongodb connect ***function call***
connectDb();

expressApp.listen(5000, () => {
  console.log("app is listening  at port 5000");
});

expressApp.use("/", firstRouter);
expressApp.use("/food", foodRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/cloths", clothRouter);
expressApp.use("/randoms", randomRouter);
expressApp.use("/users", userRouter);
expressApp.use("/products", productRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/web-users", webUserRouter);
expressApp.use("/details", detailRouter);
expressApp.use("/api/v1/address", addressRouter);

//make api
//definig task

//define router
//use that router to exressApp

//middleware
//a middleware is a function which has req, res and next access
//to triger another middleware we have to call next()

// generate token
// let infoObj = {
//   name: "nitan",
//   age: 29,
//   _id: "12341234123",
// };

// let secretKey = "express5";

// let expiryInfo = {
//   expiresIn: "365d",
// };

// let token = jwt.sign(infoObj, secretKey, expiryInfo);
// console.log(token);

//***verify token */
// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibml0YW4iLCJhZ2UiOjI5LCJfaWQiOiIxMjM0MTIzNDEyMyIsImlhdCI6MTY5MzcwNjM4OSwiZXhwIjoxNzI1MjQyMzg5fQ.KIpDJM0XsrIyKJzVEP67SvcY8Sfqglqcbeor1sr9OXI";
// let infoObj = jwt.verify(token, "express6");

// console.log(infoObj);

//verify
// the token should not exceed its expiry date
// if token is made from give secretkey  then the token will be verify else it is not

//if verify
// infoObje

// if not veirify
//error

//send mail

// await sendMail({
//   from: '"Houseofjob" <uniquekc425@gmail.com>"',
//   to: ["nitanthapa425@gmail.com", "nagendrabsthapa7351@gmail.com"],
//   subject: "account create",
//   html: `

//   `,
// });

// in bcrypt package

// let hashedPassword = await bcrypt.hash(password, 10) for hashing
//                                            password,   hashedPassword
// let isValidPassoed=  await bcrypt.compare("Password@1",hashcode#"$2b$10$pbDKu2eQkyzPWnHLIZbWS.lgW/YweaSJA./vy51vbcd7p5VhhduK2")
// this code will return either true or false
// it return true if hashPassword is made from password else it return false
