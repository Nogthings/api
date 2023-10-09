const { connect } = require("./database/connection");
const express = require("express");
const cors = require("cors")
require("dotenv").config();

//Initialize
console.log("App start...")

//db connect
connect();

//server creation 
const app = express();
const port = process.env.PORT

//cors config
app.use(cors());

//convert body a js
app.use(express.json());

//routing

const routes_article = require("./routes/articles.routes");
app.use("/api", routes_article);

app.get("/hi", (req, res) => {
    console.log("hi endpoint works!");

    return res.status(200).send({
        message: "Hi!"});
});

//create server and listen
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})