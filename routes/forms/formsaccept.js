const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util");
const admin = require("../../middleware/admin");


router.post("/:id",admin,async(req,res)=>{
   try
   {
    const formID = req.params.id;
    // validation of form exist or not
    const query = util.promisify(connection.query).bind(connection);
    const forms = await query ("select * from form where id = ?",formID);
    if(forms[0])
    {
      await query("UPDATE form SET status = 'accepted' WHERE id = ?", formID);
      res.status(200).json("FORMS ACCEPTED....");
    }
    else
    {
        res.status(404).json("SORRY THE FORM NOT EXIST.....");
    }

   }
   catch(err)
   {
     res.status(404).json(err)
   }
})

module.exports = router;