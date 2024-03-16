const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const admin = require(`../../middleware/admin`);
const { query } = require("express");


router.delete("/:id",admin, async (req, res) => {
  try {
    const id = req.params.id;
    // check if the id exist
    const query = util.promisify(connection.query).bind(connection);
    const form = await query("select * from form where id = ?", id); 
    if(form[0])
    {
      await query("delete from form where id = ? ", id)
      res.status(220).json("the form deleted...");

    }
    else
    {
      res.status(404).json("sorry the form not found to delete....");

    }

  }
  catch (err) {
    res.status(404).json(err)
  }
}






)

module.exports = router;
