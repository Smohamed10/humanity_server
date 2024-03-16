const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util"); // helper 
const admin = require(`../../middleware/admin`);

router.put("/:id", admin, async (req, res) => {
    try {
        const { name, email, phone, status } = req.body;
        const query = util.promisify(connection.query).bind(connection);// transform query to promise to can use await/ async
        // ==== prepare the object 
        const userobj = {
            name: name,
            email: email,
            phone: phone,
            status: status
        }
        //====== update in database 
        await query ("update user set ? where id = ?",[userobj,req.params.id]);
        res.status(200).json(userobj);

    }
    catch (err) {
        res.status(404).json(err)
    }
})


module.exports = router;