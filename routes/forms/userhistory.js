const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util");
const admin = require("../../middleware/admin");

router.get("/:id",admin, async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    const forms = await query("SELECT * FROM form where userid = ? ",req.params.id);

    if (forms.length === 0) {
      return res.status(404).json("There Is No forms To Show");
    }

    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json("Internal server error");
  }
});
module.exports = router;
