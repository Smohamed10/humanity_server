const router = require("express").Router();
const connection = require(`../../db/dbconnection`);
const util = require("util");

router.get("/", async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    const posts = await query("SELECT * FROM post");

    if (posts.length === 0) {
      return res.status(404).json("There Is No posts To Show");
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
