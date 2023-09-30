import { Router } from "express";

let foodRouter = Router();

foodRouter
  .route("/")
  .post((req, res) => {
    console.log(req.body);
    res.json({
      sucess: true,
      message: "food created succesfully",
    });
  })
  .get((req, res) => {
    console.log(req.query);
    res.json({
      sucess: true,
      message: "food read succesfully",
    });
  })
  .patch((req, res) => {
    console.log(req.body);
    res.json({
      sucess: true,
      message: "food  updated succesfully",
    });
  })
  .delete((req, res) => {
    res.json({
      sucess: true,
      message: "food deleted succesfully",
    });
  });

//url change again make route
foodRouter
  .route("/:id") //localhost://5000/food/any
  .post((req, res) => {
    console.log(req.params); //to get dynamic
    res.json("hello");
  });

export default foodRouter;
