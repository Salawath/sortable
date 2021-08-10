const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const userRoute = require("./routes/userRoute");

const dbpool = require("./util/database");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

app.use(expressLayouts);

app.use(userRoute);

app.listen(8080, () => {
  console.log(`connected`);
});
