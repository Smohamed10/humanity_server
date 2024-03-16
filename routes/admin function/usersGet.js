const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const admin = require (`../../middleware/admin`);

router.get("/",admin,async(req,res)=>{
    const query = util.promisify(connection.query).bind(connection) // transform query to promise to can use await/ async
    try
    {
       const users = await query ("select * from user where status = 'user'");
       if(users[0])
       {
        res.status(200).json(users);

       }
       else
       {
        res.status(404).json("SORRY THE USERS NOT FOUND ......")
       }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})


module.exports = router ;