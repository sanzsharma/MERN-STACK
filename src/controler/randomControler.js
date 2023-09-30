import { Random } from "../schema/model.js";

export const createRandomController = async (req, res) => {
  let data = req.body;

  try {
    let result = await Random.create(data);
    res.status(201).json({
      success: true,
      message: "Random created successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,

      message: error.message,
    });
  }
};

export const readAllRandomController = async (req, res) => {
  try {
    // let result = await Random.find({})
    // let result = await Random.find({ naasdfsadfame: "nitan" });
    // let result = await Random.find({ age: 29 });
    //for number case
    // let result = await Random.find({age: $gt: 25 });
    // let result = await Random.find({age: {$gte: 25} });
    // let result = await Random.find({ age: { $lt: 25 } });
    // let result = await Random.find({age:  {$lte: 25}});
    // let result = await Random.find({age: {$ne: 25} });
    // let result = await Random.find({ age: { $in: [26, 29] } });
    // let result = await Random.find({
    //   $and: [{ name: "nitan" }],
    // });

    // let result = await Random.find({
    //   $and: [{ age: { $gte: 20 } }, { age: { $lte: 25 } }],
    // });

    // let result = await Random.find({
    //   $or: [{ name: "nitan" }, { name: "sandip" }],
    // });

    // let result = await Random.find({
    //   favTeacher: "bhisma",
    // // });

    // **********searching*/
    //for array and object searching

    // find({name:"nitan"})//exact searching
    // find({name:/nitan/})// regex searching => not exact searching
    // find(name:/nitan/i)
    // find(name:/ni/)
    // find(name:/^ni/)
    // find(name:/^ni/i)
    // find(name:/n$/i)

    // let result = await Random.find({
    //   "favTeacher.boookAuthor": "nitan",
    // });
    // for find  and select

    //find has control over the object and select has control over the property of object
    // let result = await Random.find({}).select("name age -_id");
    // let result = await Random.find({}).select("-name -age password"); // is not valid
    // let result = await Random.find({}).select("-name -age"); // is  valid

    //number  sorting property unlike javascript
    // find({}).sort("name")
    // find({}).sort("name age")

    // //ascending sort  descending sort
    // find({}).sort("-name")

    // find({}).sort("-name -age")

    // find({}).sort("-name age")

    // find({}).sort("age -name")

    //in mongodb
    //array => collection
    //object => document

    //skip => always start with first
    find({}).skip("3");

    //limt
    find({}).limt("2");

    find({}).limt("5").skip("2");

    // note first find ,sort, select, then skip then limit
    // dont use limit like limi(2) use in the form limit("2")
    // dont use limit like skip(2) use in the form skip("2")

    res.status(200).json({
      success: true,
      message: "Random read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readRandomByIdController = async (req, res) => {
  // console.log(req.params);
  let randomId = req.params.randomId;

  try {
    let result = await Random.findById(randomId);

    res.status(200).json({
      success: true,
      message: "Random read successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateRandomByIdController = async (req, res) => {
  // let randomId = req.params.randomId;
  // let data = req.body;
  //in searching type doesnot matter (only value matter)
  //**********ind find method output will be empty array of object */
  // if you try to search the field which is not in database (schema) it will return empty array

  try {
    res.status(200).json({
      success: true,
      message: "Random updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteRandomByIdController = async (req, res) => {
  let randomId = req.params.randomId;

  try {
    let result = await Random.findByIdAndDelete(randomId);
    res.status(200).json({
      success: true,
      message: "Random deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
