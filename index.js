//================= init express app ===============
const express = require("express");
const app = express();


//=================Global middleware==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());  // allow https requst,respons


//======== run the app ============//
app.listen(5000,"localhost",()=>{

    console.log("SERVER IS RUNNING....");
})


//======== require routes ========//
// ====== auth =================//
app.use("/login",require("./routes/auth/login"));
app.use("/register",require("./routes/auth/register"));
//======== admin function =======//
app.use("/usersget",require("./routes/admin function/usersGet"));
app.use("/usersupdate",require("./routes/admin function/userupdate"));
app.use("/userdelete",require("./routes/admin function/userdelete"));
// ======= post function========//
app.use("/createpost",require("./routes/post/postcreate"));
app.use("/updatepost",require("./routes/post/postupdate"));
app.use("/getposts",require("./routes/post/postsget"));
app.use("/deletepost",require("./routes/post/postdelete"));
//======= form functions========//
app.use("/createform",require("./routes/forms/formcreate"));
app.use("/getpoorforms",require("./routes/forms/poorformsget"));
app.use("/getvolunteerforms",require("./routes/forms/volunteerformsget"));
app.use("/rejectform",require("./routes/forms/formreject"));
app.use("/acceptform",require("./routes/forms/formsaccept"));
app.use("/userhistory",require("./routes/forms/userhistory"));
app.use("/acceprtedformsget",require("./routes/forms/acceprtedformsget"));