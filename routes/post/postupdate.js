const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const admin = require(`../../middleware/admin`);
const { query } = require("express");


router.put("/:id",admin, async (req, res) => {
  try {
    const {name, description,pic_url,amountOfBudget,allBudget} = req.body;
    // check post exist or not 
    const query = util.promisify(connection.query).bind(connection);
    const postexist = await query("select * from post where id = ?",req.params.id)
    const post = {
      name: name,
      description: description,
      pic_url :pic_url ,
      amountOfBudget:amountOfBudget,
      allBudget:allBudget
    };

    // Insert the trip object into the database
    await query("update post set ? where id = ?", [post,req.params.id]);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;