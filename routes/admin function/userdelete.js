const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const admin = require(`../../middleware/admin`);



router.delete("/:id",admin,async(req,res)=>{
    try
    {
        const query = util.promisify(connection.query).bind(connection);// transform query to promise to can use await/ async
        await query ("delete from user where id = ? ",req.params.id);
        res.status(200).json("THE USER DELETED.....")
    }
    catch(err)
    {
      res.status(404).json(err);
    }
})








module.exports = router;