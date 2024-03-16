const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const admin = require(`../../middleware/admin`);
const { query } = require("express");


router.post("/",admin, async (req, res) => {
  try {
    const {name, description,pic_url,amountOfBudget,allBudget} = req.body;
    
    // Prepare the post object
    const post = {
      name: name,
      description: description,
      pic_url :pic_url ,
      amountOfBudget:amountOfBudget,
      allBudget:allBudget
    };

    // Insert the trip object into the database
    const query = util.promisify(connection.query).bind(connection);
    await query("INSERT INTO post SET ?", post);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;