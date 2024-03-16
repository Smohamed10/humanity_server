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
    const post = await query("select * from post where id = ?", id); 
    if(post[0])
    {
      await query("delete from post where id = ? ", id)
      res.status(220).json("the post deleted...");

    }
    else
    {
      res.status(404).json("sorry the post not found to delete....");

    }

  }
  catch (err) {
    res.status(404).json(err)
  }
}






)

module.exports = router;
