const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
console.log(PORT);
const app = express();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

const breadsController = require("./controllers/breads_controller");
app.use("/breads", breadsController);

app.get("*", (req, res) => {
  res.send("404");
});
