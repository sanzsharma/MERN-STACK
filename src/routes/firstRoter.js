//definen router
import { Router } from "express";

let firstRouter = Router();
//middleware
//normal middleware (req,res,next)=> {}  => to trigger we have call next()
//error middleware  (err,req,res,next)=>{} => trigger we have to call next(variable)// it will occur id error is ooccured
// a normal middleware can trigger normal middleware as well as error middleware
// a error middleware can trigger normal middleware as will as error middleware
//each api must have respone and it must be only one request
//
//we  have to middleware
//route middleware
//application middleware
//always middleware run first in index file and search for route middleware and end with index file.

firstRouter
  .route("/") //localhost:5000
  .post(
    (req, res, next) => {
      console.log("i am middleware1");
      res.json("ram");
      res.json("i am middle ware error is postman");
      // next("c");
    },
    (err, req, res, next) => {
      console.log("i am middleware2");
      next("a");
    },
    (err, req, res, next) => {
      console.log("i am middleware3");
      next("b");
    },
    (err, req, res, next) => {
      console.log("i am middleware4");
    }
  )

  .get((req, res) => {
    res.json("home get");
  })
  .patch((req, res) => {
    res.json("home patch");
  })
  .delete((req, res) => {
    res.json("home delete");
  });

firstRouter
  .route("/name")
  .post((req, res) => {
    res.json("name post");
  })
  .get((req, res) => {
    res.json("name get");
  })
  .patch((req, res) => {
    res.json("name patch");
  })
  .delete((req, res) => {
    res.json("name delete");
  });

firstRouter
  .route("/admin")
  .post((res, req) => {
    res.json("admin post");
  })
  .get((res, req) => {
    res.json("admin get");
  })
  .patch((res, req) => {
    res.json("admin patch");
  })
  .delete((res, req) => {
    res.json("admin delete");
  });

export default firstRouter;
