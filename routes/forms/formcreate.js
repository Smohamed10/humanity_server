const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const authorized = require(`../../middleware/authorized`);
const { query } = require("express");


router.post("/:id",authorized, async (req, res) => {
  try {
    const userid = req.params.id;
    const {name, description,budget,type} = req.body;
    
    // Prepare the post object
    const form = {
      userid:userid,
      name: name,
      description: description,
      budget:budget,
      type:type
    };

    // Insert the trip object into the database
    const query = util.promisify(connection.query).bind(connection);
    await query("INSERT INTO form SET ?", form);
    res.status(200).json(form);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;